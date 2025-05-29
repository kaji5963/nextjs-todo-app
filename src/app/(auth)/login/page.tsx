import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import AnimatedBackground from "@/components/features/auth/AnimatedBackground";

export default function LoginPage() {
  return (
    <AnimatedBackground>
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-slate-800">
            ログイン
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            または{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              新規アカウント作成
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white/80 backdrop-blur-sm py-8 px-4 shadow-xl rounded-lg sm:px-10 border border-slate-200/50">
          <form className="space-y-6">
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
              placeholder="パスワードを入力"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-400 focus:ring-blue-300 border-slate-300 rounded bg-white/50"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-slate-600"
                >
                  ログイン状態を保持
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-500 hover:text-blue-400"
                >
                  パスワードをお忘れですか？
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2.5 text-base font-medium bg-blue-400 hover:bg-blue-300 text-white transition-colors duration-200 cursor-pointer"
              >
                ログイン
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedBackground>
  );
}
