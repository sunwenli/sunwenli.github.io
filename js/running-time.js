/* ---------------------------------------------------------------------------
  * Add Website running time.
  * --------------------------------------------------------------------------- */
function show_date_time() {
  window.setTimeout("show_date_time()", 1000);
  let BirthDay = new Date(2017, 8, 17, 11, 19, 0);
  let today = new Date();
  let timeold = (today.getTime() - BirthDay.getTime());
  let msPerDay = 24 * 60 * 60 * 1000
  let e_daysold = timeold / msPerDay
  let daysold = Math.floor(e_daysold);
  let e_hrsold = (e_daysold - daysold) * 24;
  let hrsold = Math.floor(e_hrsold);
  let e_minsold = (e_hrsold - hrsold) * 60;
  let minsold = Math.floor((e_hrsold - hrsold) * 60);
  let seconds = Math.floor((e_minsold - minsold) * 60);
  span_dt_dt.innerHTML = "" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
show_date_time()