"use server";

import { loginUser, registerUser } from "@/lib/api/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const registerUserAction = async (formData: FormData) => {
  let redirectTo = "";

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("password-confirm") as string;

    if (password !== passwordConfirm) {
      throw new Error("パスワードが異なっています");
    }

    await registerUser({ name, email, password, passwordConfirm });

    redirectTo = "/login";

    revalidatePath("/");
    revalidatePath("/signup");
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }

  redirect("/login");
};

export const loginUserAction = async (formData: FormData) => {
  let redirectTo = "";

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("remember-me") === "on";

    if (!email || !password) {
      throw new Error("メールアドレス又はパスワードが入力されていません");
    }

    const user = await loginUser({ email, password, rememberMe });

    // 手動でセッションクッキーを設定
    const cookieStore = cookies();
    const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 2 * 60 * 60; // 30日 or 2時間

    (await cookieStore).set("session-token", user.rememberToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    });

    // ユーザー情報もクッキーに保存（必要に応じて）
    (await cookieStore).set(
      "user-info",
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge,
        path: "/",
      }
    );

    redirectTo = "/";

    revalidatePath("/");
    revalidatePath("/login");
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }

  redirect("/");
};
