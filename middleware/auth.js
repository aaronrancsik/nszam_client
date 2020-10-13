export default function auth(ctx) {
  if (!ctx.$auth.loggedIn) {
    return ctx.redirect('/login');
  }
  return next();
}
