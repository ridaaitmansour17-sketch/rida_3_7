/* ====== إعدادات المتجر ====== */
const WHATSAPP_NUMBER = "212712120150"; // بدّلو برقم الواتساب ديالك (بدون + أو 0 فالأول)
const DELIVERY_FEE = 15;      // ثمن التوصيل بالدرهم
const FREE_DELIVERY_OVER = 150; // توصيل مجاني فوق هاد المبلغ

/* ====== المنتجات ====== */
const CATEGORIES = [
  { id: "all", name: "🔥 الكل" },
  { id: "tacos", name: "🌮 طاكوس" },
  { id: "pizza", name: "🍕 بيتزا" },
  { id: "shawarma", name: "🌯 شورما" },
  { id: "sandwich", name: "🥪 سندويتشات" },
  { id: "burger", name: "🍔 برغر" },
  { id: "sushi", name: "🍣 سوشي" },
  { id: "maroc", name: "🇲🇦 مغربي أصيل" },
  { id: "starters", name: "🥣 شعبي ومقبلات" },
  { id: "drinks", name: "🍹 مشروبات وحلويات" },
];

const G = {
  red: "linear-gradient(135deg,#7a1410,#e63c2f)",
  gold: "linear-gradient(135deg,#8a5a00,#ffb703)",
  green: "linear-gradient(135deg,#0f4d2c,#2fb26b)",
  pink: "linear-gradient(135deg,#7a1d44,#ff6b9d)",
  brown: "linear-gradient(135deg,#3b2013,#a0522d)",
  blue: "linear-gradient(135deg,#0b3a5c,#2aa9d8)",
};

const PRODUCTS = [
  // طاكوس
  { id: 1, cat: "tacos", e: "🌮", n: "طاكوس دجاج", d: "دجاج متبل، فريت، صلصة جبن وسامورايي.", p: 35, g: G.gold, tag: "الأكثر طلباً", img: "tacos" },
  { id: 2, cat: "tacos", e: "🌮", n: "طاكوس كفتة", d: "كفتة مشوية، جبن شيدر، صلصة حارة.", p: 38, g: G.red },
  { id: 3, cat: "tacos", e: "🌮", n: "طاكوس ميكس XL", d: "دجاج + كفتة + نغيت، كبير وشبعان.", p: 55, g: G.brown, tag: "XL" },
  // بيتزا
  { id: 4, cat: "pizza", e: "🍕", n: "بيتزا مارغريتا", d: "طماطم، موزاريلا، ريحان طري.", p: 45, g: G.red },
  { id: 5, cat: "pizza", e: "🍕", n: "بيتزا فرمجي 4", d: "أربع أنواع ديال الجبن، ذوبان.", p: 65, g: G.gold, tag: "جديد" },
  { id: 6, cat: "pizza", e: "🍕", n: "بيتزا دجاج وفطر", d: "دجاج مشوي، فطر، زيتون، جبن.", p: 60, g: G.brown },
  // شورما
  { id: 7, cat: "shawarma", e: "🌯", n: "شورما دجاج", d: "دجاج مشوي، توم، مخلل، بطاطس.", p: 30, g: G.gold, tag: "كلاسيك" },
  { id: 8, cat: "shawarma", e: "🌯", n: "شورما لحم", d: "لحم مقدد، طحينة، خضرة طرية.", p: 38, g: G.brown },
  { id: 9, cat: "shawarma", e: "🌯", n: "طبق شورما", d: "شورما فوق البطاطس والأرز + سلطة.", p: 50, g: G.red },
  // سندويتشات
  { id: 10, cat: "sandwich", e: "🥪", n: "سندويتش كفتة", d: "كفتة، طماطم مشوية، بصلة، هريسة.", p: 25, g: G.red, img: "sandwich-kefta" },
  { id: 11, cat: "sandwich", e: "🥪", n: "سندويتش بوليت", d: "دجاج مشوي، بطاطس، مايونيز.", p: 28, g: G.gold, img: "sandwich-poulet" },
  { id: 12, cat: "sandwich", e: "🥪", n: "سندويتش تونة", d: "تونة، بيض، زيتون، خضرة.", p: 22, g: G.blue, img: "sandwich-tuna" },
  { id: 13, cat: "sandwich", e: "🥖", n: "باغيط مدخن", d: "ديندة مدخنة، جبن، خس.", p: 27, g: G.green },
  // برغر
  { id: 14, cat: "burger", e: "🍔", n: "تشيز برغر", d: "لحم بقري 150غ، شيدر، صلصة خاصة.", p: 42, g: G.brown },
  { id: 15, cat: "burger", e: "🍔", n: "دجاج كريسبي", d: "دجاج مقرمش، خس، صلصة حارة.", p: 40, g: G.gold, tag: "حار 🌶️" },
    { id: 16, cat: "burger", e: "🍟", n: "فريت", d: "بطاطس ذهبية مقرمشة، ديما سخونة.", p: 15, g: G.gold, img: "fries" },
  // سوشي
  { id: 17, cat: "sushi", e: "🍣", n: "ساليمون رول (8 قطع)", d: "سلمون طري، أفوكادو، جبن كريمي.", p: 75, g: G.pink, tag: "فاخر" },
  { id: 18, cat: "sushi", e: "🍱", n: "بوكس سوشي ميكس (16 قطعة)", d: "تشكيلة نيغيري ومكي وكاليفورنيا.", p: 140, g: G.blue, tag: "للمشاركة" },
  { id: 19, cat: "sushi", e: "🍤", n: "رول كريفيت", d: "جمبري مقرمش، خيار، صلصة حارة.", p: 70, g: G.red },
  // مغربي
  { id: 20, cat: "maroc", e: "🍲", n: "طاجين دجاج بالزيتون", d: "دجاج بلدي، زيتون، ليمون مصير.", p: 65, g: G.gold, tag: "بلدي" },
  { id: 21, cat: "maroc", e: "🥘", n: "كسكس بالخضرة", d: "كسكس يدوي، لحم، 7 خضاري.", p: 70, g: G.green },
  { id: 22, cat: "maroc", e: "🥧", n: "بسطيلة دجاج", d: "ورقة رقيقة، لوز، سكر وقرفة.", p: 55, g: G.brown, tag: "فاسية" },
    { id: 23, cat: "starters", e: "🥣", n: "حريرة", d: "حريرة سخونة بالحمص والعدس، مع الخبز.", p: 15, g: G.red, img: "harira", tag: "ديال رمضان وديما" },
    { id: 24, cat: "starters", e: "🫓", n: "مسمن بالعسل", d: "مسمن مقرمش مع العسل والزبدة وأتاي.", p: 12, g: G.gold, img: "msemen" },
  // مشروبات
  { id: 25, cat: "drinks", e: "🍵", n: "أتاي بالنعناع", d: "براد أتاي مغربي أصيل.", p: 12, g: G.green },
  { id: 26, cat: "drinks", e: "🍹", n: "عصير أفوكادو", d: "أفوكادو، حليب، لوز وعسل.", p: 22, g: G.green, tag: "كيفتح الشهية" },
  { id: 27, cat: "drinks", e: "🍯", n: "شباكية (500غ)", d: "شباكية بالعسل والسمسم.", p: 40, g: G.brown },
  { id: 28, cat: "drinks", e: "🍰", n: "تشيز كيك", d: "كريمي بصلصة الفراولة.", p: 28, g: G.pink },
  { id: 29, cat: "starters", e: "🥣", n: "بيصارة", d: "بيصارة سخونة بالكمون وزيت الزيتون.", p: 15, g: G.gold, img: "bissara" },
  { id: 30, cat: "maroc", e: "🍳", n: "شكشوكة", d: "بيض فالطماطم والفلفل والمعدنوس.", p: 30, g: G.red, img: "shakshuka" },
  { id: 31, cat: "starters", e: "🍆", n: "زعلوك", d: "سلطة الباذنجان والطماطم المطبوخة.", p: 20, g: G.brown, img: "zaalouk" },
  { id: 32, cat: "starters", e: "🐌", n: "ببوش", d: "ببوش بمرقتو بالتوابل، كيسخن البدن.", p: 15, g: G.brown, img: "babbouche", tag: "بلدي" },
  { id: 33, cat: "starters", e: "🥔", n: "ماكودة (3 حبات)", d: "ماكودة بطاطس مقرمشة بالمعدنوس.", p: 12, g: G.gold, img: "maakouda" },
  { id: 34, cat: "starters", e: "🥟", n: "بريوات (6 حبات)", d: "بريوات مقرمشة محشية بالدجاج.", p: 25, g: G.gold, img: "briouat", tag: "مقرمش" },
  { id: 35, cat: "maroc", e: "🐟", n: "سردين مقلي بالشرمولة", d: "سردين طري مقلي مع شرمولة وليمون.", p: 40, g: G.blue, img: "sardines" },
  { id: 36, cat: "maroc", e: "🍤", n: "كرات السمك", d: "كرات سمك مقلية مع صلصة ومايونيز.", p: 35, g: G.blue, img: "kefta-hout" },
  { id: 37, cat: "maroc", e: "🍢", n: "بروشيت مشوية", d: "أسياخ لحم مشوية بالفحم مع خبز وحريرة.", p: 45, g: G.red, img: "brochettes", tag: "مشوي" },
  { id: 38, cat: "maroc", e: "🍳", n: "بيض بالطماطم والزيتون", d: "بيض مقلي بالطماطم والكمون، مع الخبز.", p: 22, g: G.gold, img: "bayd" },
  { id: 39, cat: "sandwich", e: "🥪", n: "سندويتش ماكودة", d: "ماكودة مقرمشة، هريسة، خس وبصلة.", p: 18, g: G.gold, img: "sandwich-maakouda" },
  { id: 40, cat: "sandwich", e: "🥪", n: "بانيني تونة وجبن", d: "تونة، جبن ذايب، خيار، محمص.", p: 28, g: G.blue, img: "panini-tuna" },
];

/* ====== الخيارات (حجم + إضافات) ====== */
const SIZES = { S: ["صغير", 0], M: ["وسط", 10], L: ["كبير", 20] };
const SIZED = ["pizza", "tacos", "burger"];
const EXTRAS = {
  tacos: [["جبن زيادة", 5], ["فريت زيادة", 5], ["صلصة حارة", 3]],
  pizza: [["جبن زيادة", 8], ["زيتون", 5], ["فطر", 6]],
  burger: [["جبن زيادة", 5], ["بيكون", 8], ["بصل مكرمل", 4]],
  shawarma: [["بطاطس", 5], ["جبن", 5], ["صلصة توم", 3]],
  sandwich: [["بطاطس", 5], ["جبن", 5], ["بيض", 4]],
  sushi: [["صلصة سوجا", 3], ["واسابي", 2], ["جنجبير", 2]],
  maroc: [["خبز زيادة", 3], ["زيتون", 5]],
  starters: [["خبز زيادة", 3], ["زيتون", 5]],
  drinks: [],
};

/* ====== الحالة ====== */
let activeCat = "all", query = "", cart = [], modal = null;
try { cart = JSON.parse(localStorage.getItem("st_cart2") || "[]"); } catch (e) { cart = []; }
const $ = (s) => document.querySelector(s);
const fmt = (n) => `${n} درهم`;
const save = () => { try { localStorage.setItem("st_cart2", JSON.stringify(cart)); } catch (e) {} };
const byId = (id) => PRODUCTS.find((x) => x.id == id);

function unitPrice(l) {
  const p = byId(l.id); if (!p) return 0;
  let u = p.p + (l.size ? SIZES[l.size][1] : 0);
  (l.extras || []).forEach((i) => (u += (EXTRAS[p.cat][i] || [0, 0])[1]));
  return u;
}
const lineKey = (l) => `${l.id}|${l.size || ""}|${(l.extras || []).join(",")}`;
const subtotal = () => cart.reduce((s, l) => s + unitPrice(l) * l.q, 0);
const delivery = () => (subtotal() === 0 || subtotal() >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE);
const total = () => subtotal() + delivery();
function lineDesc(l) {
  const p = byId(l.id), a = [];
  if (l.size) a.push(SIZES[l.size][0]);
  (l.extras || []).forEach((i) => a.push(EXTRAS[p.cat][i][0]));
  return a.join(" + ");
}

/* ====== الصور ====== */
const media = (p) => p.img ? `<img src="images/${p.img}.jpg" alt="${p.n}" loading="lazy">` : `<i>${p.e}</i>`;
const thumb = (p) => p.img ? `<img class="th" src="images/${p.img}.jpg" alt="">` : p.e;

/* ====== المينيو ====== */
function renderTabs() {
  $("#tabs").innerHTML = CATEGORIES.map((c) => `<button class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}">${c.name}</button>`).join("");
}
function renderGrid() {
  const q = query.trim();
  const list = PRODUCTS.filter((p) => (activeCat === "all" || p.cat === activeCat) && (!q || (p.n + p.d).includes(q)));
  $("#grid").innerHTML = list.length ? list.map((p, i) => `
    <article class="card" style="animation-delay:${i * 40}ms" data-open="${p.id}">
      <div class="pic" style="--g:${p.g}">${p.tag ? `<span class="tag">${p.tag}</span>` : ""}${media(p)}</div>
      <div class="info"><h3>${p.n}</h3><p>${p.d}</p>
        <div class="row"><span class="price">${p.p} <small>درهم</small></span><button class="add" data-open="${p.id}">+ زيد</button></div>
      </div></article>`).join("") : `<p class="sub" style="grid-column:1/-1">ما لقينا والو 😅 جرب كلمة أخرى.</p>`;
}

/* ====== نافذة المنتج ====== */
function openModal(id) {
  const p = byId(id);
  modal = { id: p.id, size: SIZED.includes(p.cat) ? "M" : null, extras: [], q: 1 };
  renderModal(); $("#modal").classList.add("show"); $("#overlay").classList.add("show");
}
function modalPrice() { return unitPrice(modal) * modal.q; }
function renderModal() {
  const p = byId(modal.id), ex = EXTRAS[p.cat] || [];
  $("#modalBody").innerHTML = `
    <div class="m-pic" style="--g:${p.g}">${media(p)}</div>
    <h3>${p.n}</h3><p class="m-d">${p.d}</p>
    ${modal.size ? `<h4>الحجم</h4><div class="opts">${Object.entries(SIZES).map(([k, [n, a]]) =>
      `<button class="opt ${modal.size === k ? "on" : ""}" data-size="${k}">${n}${a ? ` <small>+${a}</small>` : ""}</button>`).join("")}</div>` : ""}
    ${ex.length ? `<h4>إضافات</h4><div class="opts">${ex.map(([n, a], i) =>
      `<button class="opt ${modal.extras.includes(i) ? "on" : ""}" data-extra="${i}">${n} <small>+${a}</small></button>`).join("")}</div>` : ""}
    <div class="m-foot">
      <div class="qty"><button data-mq="-1">−</button><span>${modal.q}</span><button data-mq="1">+</button></div>
      <button class="btn primary" data-confirm>زيد للسلة · ${fmt(modalPrice())}</button>
    </div>`;
}
function closeModal() { $("#modal").classList.remove("show"); if (!$("#drawer").classList.contains("open")) $("#overlay").classList.remove("show"); modal = null; }
function confirmModal() {
  const l = { id: modal.id, size: modal.size, extras: [...modal.extras].sort(), q: modal.q };
  const ex = cart.find((x) => lineKey(x) === lineKey(l));
  ex ? (ex.q += l.q) : cart.push(l);
  closeModal(); renderCart(); toast("تزادت للسلة ✅");
  const b = $("#openCart"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
}

/* ====== السلة ====== */
function renderCart() {
  $("#cartCount").textContent = cart.reduce((s, l) => s + l.q, 0);
  const sub = subtotal(), left = FREE_DELIVERY_OVER - sub;
  $("#cartItems").innerHTML = cart.length ? cart.map((l, i) => { const p = byId(l.id); return `
    <div class="item"><span class="e">${thumb(p)}</span>
      <div class="n">${p.n}${lineDesc(l) ? `<em>${lineDesc(l)}</em>` : ""}<small>${fmt(unitPrice(l) * l.q)}</small></div>
      <div class="qty"><button data-dec="${i}">−</button><span>${l.q}</span><button data-inc="${i}">+</button></div></div>`; }).join("")
    : `<div class="empty"><b>🍽️</b>السلة خاوية… عمرها بالمزيان!</div>`;
  $("#ship").innerHTML = !cart.length ? "" : left > 0
    ? `🛵 باقي ليك <b>${fmt(left)}</b> للتوصيل المجاني<div class="bar"><i style="width:${Math.min(100, sub / FREE_DELIVERY_OVER * 100)}%"></i></div>`
    : `🎉 التوصيل مجاني!`;
  $("#sub").textContent = fmt(sub);
  $("#fee").textContent = delivery() ? fmt(delivery()) : "مجاني";
  $("#total").textContent = fmt(total());
  save();
}
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1600);
}
function openCart(open) {
  $("#drawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open || !!modal);
  $("#drawer").setAttribute("aria-hidden", String(!open));
}
function checkout(e) {
  if (!cart.length) { e.preventDefault(); return toast("السلة خاوية 😅"); }
  const name = $("#custName").value.trim(), phone = $("#custPhone").value.trim(), addr = $("#custAddr").value.trim();
  if (!name || !phone || !addr) { e.preventDefault(); return toast("عمر سميتك، رقمك والعنوان 🙏"); }
  const lines = cart.map((l) => `• ${l.q} × ${byId(l.id).n}${lineDesc(l) ? ` (${lineDesc(l)})` : ""} = ${fmt(unitPrice(l) * l.q)}`).join("\n");
  const note = $("#custNote").value.trim();
  const msg = `🔥 طلب جديد — Salhiy Tboun Lmsrf9\n\n${lines}\n\n🧾 الطلب: ${fmt(subtotal())}\n🛵 التوصيل: ${delivery() ? fmt(delivery()) : "مجاني"}\n💰 المجموع: ${fmt(total())}\n\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n📍 العنوان: ${addr}${note ? `\n📝 ملاحظة: ${note}` : ""}`;
  $("#checkout").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ====== الأحداث ====== */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-cat],[data-open],[data-inc],[data-dec],[data-size],[data-extra],[data-mq],[data-confirm],[data-closem]");
  if (!t) return;
  const d = t.dataset;
  if (d.cat) { activeCat = d.cat; renderTabs(); renderGrid(); }
  else if (d.open) openModal(d.open);
  else if (d.size) { modal.size = d.size; renderModal(); }
  else if (d.extra !== undefined) { const i = +d.extra, k = modal.extras.indexOf(i); k < 0 ? modal.extras.push(i) : modal.extras.splice(k, 1); renderModal(); }
  else if (d.mq) { modal.q = Math.max(1, Math.min(20, modal.q + +d.mq)); renderModal(); }
  else if (d.confirm !== undefined) confirmModal();
  else if (d.closem !== undefined) closeModal();
  else if (d.inc) { cart[d.inc].q++; renderCart(); }
  else if (d.dec) { if (--cart[d.dec].q <= 0) cart.splice(d.dec, 1); renderCart(); }
});
$("#openCart").onclick = () => openCart(true);
$("#closeCart").onclick = () => openCart(false);
$("#overlay").onclick = () => { closeModal(); openCart(false); };
$("#checkout").addEventListener("click", checkout);
$("#search").oninput = (e) => { query = e.target.value; renderGrid(); };
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); openCart(false); } });

$("#waLink").href = `https://wa.me/${WHATSAPP_NUMBER}`;
$("#year").textContent = new Date().getFullYear();
renderTabs(); renderGrid(); renderCart();
