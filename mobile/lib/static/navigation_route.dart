enum NavigationRoute {
  homeRoute("/home"),
  profile("/profile"),
  leave("/leave"),
  reimbursement("/reimbursement"),
  wage("/wage");

  const NavigationRoute(this.name);
  final name;
}