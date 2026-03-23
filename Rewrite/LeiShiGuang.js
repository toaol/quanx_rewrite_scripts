try {
  const obj = JSON.parse($response.body);
  if (obj.data) obj.data.showOpenGuide = false;
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});
}
