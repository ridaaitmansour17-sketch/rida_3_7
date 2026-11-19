/* ====== إعدادات المتجر ====== */
const WHATSAPP_NUMBER = "212600000000"; // بدّلو برقم الواتساب ديالك (بدون + أو 0 فالأول)
const DELIVERY_NOTE = "التوصيل كيتحسب حسب الحي";

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
  { id: 1, cat: "tacos", e: "🌮", n: "طاكوس دجاج", d: "دجاج متبل، فريت، صلصة جبن وسامورايي.", p: 35, g: G.gold, tag: "الأكثر طلباً" },
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
  { id: 10, cat: "sandwich", e: "🥪", n: "سندويتش كفتة", d: "كفتة، طماطم مشوية، بصلة، هريسة.", p: 25, g: G.red },
  { id: 11, cat: "sandwich", e: "🥪", n: "سندويتش بوليت", d: "دجاج مشوي، بطاطس، مايونيز.", p: 28, g: G.gold },
  { id: 12, cat: "sandwich", e: "🥪", n: "سندويتش تونة", d: "تونة، بيض، زيتون، خضرة.", p: 22, g: G.blue },
  { id: 13, cat: "sandwich", e: "🥖", n: "باغيط مدخن", d: "ديندة مدخنة، جبن، خس.", p: 27, g: G.green },
  // برغر
  { id: 14, cat: "burger", e: "🍔", n: "تشيز برغر", d: "لحم بقري 150غ، شيدر، صلصة خاصة.", p: 42, g: G.brown },
  { id: 15, cat: "burger", e: "🍔", n: "دجاج كريسبي", d: "دجاج مقرمش، خس، صلصة حارة.", p: 40, g: G.gold, tag: "حار 🌶️" },
  { id: 16, cat: "burger", e: "🍟", n: "فريت جبن", d: "بطاطس مقرمشة بصلصة الجبن.", p: 20, g: G.gold },
  // سوشي
  { id: 17, cat: "sushi", e: "🍣", n: "ساليمون رول (8 قطع)", d: "سلمون طري، أفوكادو، جبن كريمي.", p: 75, g: G.pink, tag: "فاخر" },
  { id: 18, cat: "sushi", e: "🍱", n: "بوكس سوشي ميكس (16 قطعة)", d: "تشكيلة نيغيري ومكي وكاليفورنيا.", p: 140, g: G.blue, tag: "للمشاركة" },
  { id: 19, cat: "sushi", e: "🍤", n: "رول كريفيت", d: "جمبري مقرمش، خيار، صلصة حارة.", p: 70, g: G.red },
  // مغربي
  { id: 20, cat: "maroc", e: "🍲", n: "طاجين دجاج بالزيتون", d: "دجاج بلدي، زيتون، ليمون مصير.", p: 65, g: G.gold, tag: "بلدي" },
  { id: 21, cat: "maroc", e: "🥘", n: "كسكس بالخضرة", d: "كسكس يدوي، لحم، 7 خضاري.", p: 70, g: G.green },
  { id: 22, cat: "maroc", e: "🥧", n: "بسطيلة دجاج", d: "ورقة رقيقة، لوز، سكر وقرفة.", p: 55, g: G.brown, tag: "فاسية" },
  { id: 23, cat: "maroc", e: "🥣", n: "حريرة", d: "حريرة سخونة مع تمر وشباكية.", p: 15, g: G.red },
  { id: 24, cat: "maroc", e: "🫓", n: "مسمن محشي", d: "مسمن بالكفتة والجبن، مقرمش.", p: 20, g: G.gold },
  // مشروبات
  { id: 25, cat: "drinks", e: "🍵", n: "أتاي بالنعناع", d: "براد أتاي مغربي أصيل.", p: 12, g: G.green },
  { id: 26, cat: "drinks", e: "🍹", n: "عصير أفوكادو", d: "أفوكادو، حليب، لوز وعسل.", p: 22, g: G.green, tag: "كيفتح الشهية" },
  { id: 27, cat: "drinks", e: "🍯", n: "شباكية (500غ)", d: "شباكية بالعسل والسمسم.", p: 40, g: G.brown },
  { id: 28, cat: "drinks", e: "🍰", n: "تشيز كيك", d: "كريمي بصلصة الفراولة.", p: 28, g: G.pink },
];

/* ====== الحالة ====== */
let activeCat = "all";
let cart = {};
try { cart = JSON.parse(localStorage.getItem("st_cart") || "{}"); } catch (e) { cart = {}; }

const $ = (s) => document.querySelector(s);
const fmt = (n) => `${n} درهم`;
const save = () => { try { localStorage.setItem("st_cart", JSON.stringify(cart)); } catch (e) {} };

/* ====== رسم المينيو ====== */
function renderTabs() {
  $("#tabs").innerHTML = CATEGORIES.map(
    (c) => `<button class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}">${c.name}</button>`
  ).join("");
}

function renderGrid() {
  const list = PRODUCTS.filter((p) => activeCat === "all" || p.cat === activeCat);
  $("#grid").innerHTML = list.map((p, i) => `
    <article class="card" style="animation-delay:${i * 40}ms">
      <div class="pic" style="--g:${p.g}">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        <i>${p.e}</i>
      </div>
      <div class="info">
        <h3>${p.n}</h3>
        <p>${p.d}</p>
        <div class="row">
          <span class="price">${p.p} <small>درهم</small></span>
          <button class="add" data-add="${p.id}">+ زيد</button>
        </div>
      </div>
    </article>`).join("");
}

/* ====== السلة ====== */
function cartEntries() {
  return Object.entries(cart)
    .map(([id, q]) => ({ p: PRODUCTS.find((x) => x.id == id), q }))
    .filter((x) => x.p);
}
const total = () => cartEntries().reduce((s, { p, q }) => s + p.p * q, 0);

function renderCart() {
  const items = cartEntries();
  const count = items.reduce((s, x) => s + x.q, 0);
  $("#cartCount").textContent = count;
  $("#total").textContent = fmt(total());
  $("#cartItems").innerHTML = items.length
    ? items.map(({ p, q }) => `
      <div class="item">
        <span class="e">${p.e}</span>
        <div class="n">${p.n}<small>${fmt(p.p * q)}</small></div>
        <div class="qty">
          <button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button>
        </div>
      </div>`).join("")
    : `<div class="empty"><b>🍽️</b>السلة خاوية… عمرها بالمزيان!</div>`;
  save();
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 1600);
}

function openCart(open) {
  $("#drawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open);
  $("#drawer").setAttribute("aria-hidden", String(!open));
}

function checkout() {
  const items = cartEntries();
  if (!items.length) return toast("السلة خاوية 😅");
  const name = $("#custName").value.trim();
  const phone = $("#custPhone").value.trim();
  const addr = $("#custAddr").value.trim();
  if (!name || !phone || !addr) return toast("عمر سميتك، رقمك والعنوان 🙏");

  const lines = items.map(({ p, q }) => `• ${q} × ${p.n} = ${fmt(p.p * q)}`).join("\n");
  const msg =
`🔥 طلب جديد — Salhiy Tboun Lmsrf9

${lines}

💰 المجموع: ${fmt(total())}
(${DELIVERY_NOTE})

👤 الاسم: ${name}
📞 الهاتف: ${phone}
📍 العنوان: ${addr}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}

/* ====== الأحداث ====== */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-cat],[data-add],[data-inc],[data-dec]");
  if (!t) return;
  if (t.dataset.cat) { activeCat = t.dataset.cat; renderTabs(); renderGrid(); }
  else if (t.dataset.add) {
    cart[t.dataset.add] = (cart[t.dataset.add] || 0) + 1;
    renderCart();
    const b = $("#openCart"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
    toast("تزادت للسلة ✅");
  } else if (t.dataset.inc) { cart[t.dataset.inc]++; renderCart(); }
  else if (t.dataset.dec) {
    if (--cart[t.dataset.dec] <= 0) delete cart[t.dataset.dec];
    renderCart();
  }
});
$("#openCart").onclick = () => openCart(true);
$("#closeCart").onclick = () => openCart(false);
$("#overlay").onclick = () => openCart(false);
$("#checkout").onclick = checkout;
document.addEventListener("keydown", (e) => e.key === "Escape" && openCart(false));

$("#waLink").href = `https://wa.me/${WHATSAPP_NUMBER}`;
$("#year").textContent = new Date().getFullYear();
renderTabs(); renderGrid(); renderCart();
