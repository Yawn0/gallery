import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav()
{
    return (
        <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
            <div className="">
                Gallery
            </div>
            <div>
                <SignedOut>
                    <SignInButton>
                        <button type="button" className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}