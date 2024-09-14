import Navbar from "~/components/navbar";
import SignInForm from "~/components/signin/signin-form";

export default function SignInPage() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-3/4 items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/bg.webm" type="video/webm" />
          <source src="/c0d-frontend/bg.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <SignInForm className="relative z-10" />
      </div>
    </div>
  );
}
