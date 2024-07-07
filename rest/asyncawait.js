async function bakeCookies() {
  console.log("Entered bakeCookies function");
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
async function serveCookesAsync() {
  console.log("Entering serviceCookesAsync function");
  const cookies = await bakeCookies();
  console.log("The cookies are ready to serve");
}

serveCookesAsync();
