import { loginInput, SignupInput, User } from "./types";

const API_BASE_URL = "http://localhost:8080";

/**
 * ユーザー登録を行う
 * @param {SignupInput} user - 登録するユーザー情報（名前、メールアドレス、パスワード）
 * @returns {Promise<void>}
 * @throws {Error} 登録に失敗した場合
 */
export const registerUser = async (user: SignupInput): Promise<void> => {
  await auth(user, "register", "ユーザー登録");
};

/**
 * ユーザーログインを行う
 * @param {loginInput} user - ログイン情報（メールアドレス、パスワード）
 * @returns {Promise<User>} ログインしたユーザー情報
 * @throws {Error} ログインに失敗した場合
 */
export const loginUser = async (user: loginInput): Promise<User> => {
  return (await auth(user, "login", "ログイン")) as User;
};

/**
 * 認証関連のAPIリクエストを実行する共通関数
 * @param {SignupInput | loginInput} user - ユーザー情報
 * @param {string} rootPath - APIのエンドポイント（register/login）
 * @param {string} authError - エラーメッセージに使用する認証タイプ
 * @returns {Promise<User | void>} ログイン時はユーザー情報、登録時はvoid
 * @throws {Error} リクエストが失敗した場合
 */
const auth = async (
  user: SignupInput | loginInput,
  rootPath: string,
  authError: string
): Promise<User | void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${rootPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Registration error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });
      throw new Error(
        `${authError}に失敗しました: ${response.status} ${response.statusText}`
      );
    }

    if (rootPath === "login") {
      const authUser: User = await response.json();
      return authUser;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
