import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <SignUp 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg"
          }
        }}
        routing="hash"
        signInUrl="/sign-in"
        afterSignInUrl="/"
        afterSignUpUrl="/"
        unsafeMetadata={{
          skipUsernamePage: true
        }}
      />
    </div>
  );
}
