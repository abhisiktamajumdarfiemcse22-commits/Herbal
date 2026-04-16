import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg"
          }
        }}
        routing="hash"
        signUpUrl="/sign-up"
        afterSignInUrl="/"
        afterSignUpUrl="/"
        unsafeMetadata={{
          skipUsernamePage: true
        }}
      />
    </div>
  );
}
