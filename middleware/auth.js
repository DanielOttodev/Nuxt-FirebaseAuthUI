export default function ({ store, redirect }) {
  if (!store.state.user) {
    console.log("in middleware");
    redirect("/login");
    console.log("routed");
  }
}
