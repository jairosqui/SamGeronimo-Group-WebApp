export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return Response.json({ success: false, message: "missing-token" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return Response.json(
        { success: false, message: "server-not-configured" },
        { status: 500 }
      );
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });

    const data = await verifyRes.json();
    return Response.json({ success: !!data.success });
  } catch (err) {
    return Response.json({ success: false, message: "verify-failed" }, { status: 500 });
  }
}
