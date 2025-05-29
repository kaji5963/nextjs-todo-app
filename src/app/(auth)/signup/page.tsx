import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import AnimatedBackground from "@/components/features/auth/AnimatedBackground";

export default function SignupPage() {
  return (
    <AnimatedBackground>
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-slate-800">
            新規アカウント作成
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            または{" "}
            <Link
              href="/login"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              既存アカウントでログイン
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white/80 backdrop-blur-sm py-8 px-4 shadow-xl rounded-lg sm:px-10 border border-slate-200/50">
          <form className="space-y-6">
            <Input
              id="name"
              name="name"
              type="text"
              label="お名前"
              required
              placeholder="山田 太郎"
            />

            <Input
              id="email"
              name="email"
              type="email"
              label="メールアドレス"
              required
              placeholder="example@example.com"
            />

            <Input
              id="password"
              name="password"
              type="password"
              label="パスワード"
              required
              placeholder="8文字以上のパスワード"
            />

            <Input
              id="password-confirm"
              name="password-confirm"
              type="password"
              label="パスワード（確認）"
              required
              placeholder="パスワードを再入力"
            />

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2.5 text-base font-medium bg-blue-400 hover:bg-blue-300 text-white transition-colors duration-200 cursor-pointer"
              >
                アカウントを作成
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedBackground>
  );
}
