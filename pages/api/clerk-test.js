export default async function handler(req, res) {
  const key = process.env.CLERK_API_KEY || process.env.NEXT_PUBLIC_CLERK_API_KEY

  if (!key) {
    return res.status(500).json({
      ok: false,
      clerkKeyPresent: false,
      message: 'CLERK_API_KEY is not set in server environment (.env).'
    })
  }

  // Minimal safe check: do not echo the key back. Return that it's present and some server info.
  return res.status(200).json({
    ok: true,
    clerkKeyPresent: true,
    message: 'CLERK_API_KEY is present on the server. You can now make server-side Clerk API calls using this key.'
  })
}
