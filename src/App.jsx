import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Soup,
  Salad,
  UtensilsCrossed,
  ChevronRight,
  BadgeCheck,
  Truck,
  Users,
  Wallet,
  Gift,
  Info,
  Store,
  ShieldCheck,
  Leaf,
  Droplets,
  ChevronDown,
  Star,
} from "lucide-react";

// ✅ Landing temporal (1 archivo) — React + Tailwind (mobile-first)
// ✅ Visual “más vivo” estilo Canva (Hero verde + CTA naranja + acentos verdes)

const BRAND = {
  name: "NutriDeliciasFit",
  headline: "Salud integral: come sano, come rico, come con gusto.",
  subheadline:
    "Almuerzos diarios y dietas sin frituras, con ingredientes frescos y porciones equilibradas.",
  city: "Cercado - Cochabamba",
  schedule: "Lunes a Viernes",

  whatsappNumber: "59168459468",

  instagramUrl:
    "https://www.instagram.com/nutrideliciasfit?igsh=MXNrM3Y4NnF6cXJiOA==",
  facebookUrl: "https://www.facebook.com/share/1FsJrztm6A/",

  cutoffTime: "09:00 am",
  deliveryWindow: "12:15 – 13:00",

  deliveryZoneName: "Centro/Prado",
  deliveryCentroPrice: 7,
  deliveryOutsideText: "Resto de Cercado: precio según ubicación",

  paymentsText: "Pagos: efectivo o QR. Packs: prepago por QR ✅",

  // 🎨 Tema estilo Canva (más cálido/vivo)
  colors: {
    greenDark: "#2F4F2F",
    greenMid: "#3D6B3D",
    greenBright: "#A6C93A",
    orange: "#F05A28",
    orangeDark: "#D94818",
    cream: "#FFFDF8",
    surface: "#F8F9FA",
    softGreen: "#F0F8E8",
    softOrange: "#FFF4E6",
    black: "#000000",
    border: "#EDEDED",
  },

  // Coloca el logo en /public/LogoND1.jpg
  logoPath: "/LogoND1.jpg",

  // Imágenes (IA) — coloca en /public/img/
  images: {
    hero: "/img/hero-fit.jpg",
    dieta: "/img/dieta.jpg",
    segundo: "/img/segundo.jpg",
    sopa: "/img/sopa.jpg",
    completo: "/img/completo.jpg",
  },

  imageNote: "Imágenes referenciales.",
};

const PRICES = {
  dieta: 20,
  segundo: 18,
  sopa: 10,
  completo: 22,
  dietaConSopa: 25,
  sopaExtra: 10,
};

const PACKS = {
  pack10: {
    title: "Pack 10 (Prepago)",
    subtitle: "Saldo con bono · ideal para arrancar",
    pay: 190,
    credit: 200,
    bonus: 10,
    validityDays: 30,
    gifts: ["1 refresco fit"],
    deliveriesCentro: 2,
    note: "Deliveries gratis solo en Centro/Prado (ventana/ruta).",
  },
  pack20: {
    title: "Pack 20 (Prepago)",
    subtitle: "Plan Full · más ahorro y comodidad",
    pay: 370,
    credit: 400,
    bonus: 30,
    validityDays: 45,
    gifts: ["2 refrescos fit", "1 postre fit (cupón; válido desde febrero)"],
    deliveriesCentro: 5,
    note: "Deliveries gratis solo en Centro/Prado (ventana/ruta).",
  },
};

const anchor = {
  menu: "#menu",
  packs: "#packs",
  como: "#como-funciona",
  testimonios: "#testimonios",
  faq: "#faq",
  contacto: "#contacto",
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function classNames(...s) {
  return s.filter(Boolean).join(" ");
}

function Button({ children, href, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[999px] px-4 py-2 text-sm font-extrabold transition active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "text-white shadow-[0_10px_30px_rgba(240,90,40,0.35)]"
      : variant === "ghost"
      ? "text-white/90 hover:text-white hover:bg-white/10"
      : "bg-white text-slate-900 border hover:bg-slate-50";

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={classNames(base, styles, className)}
      style={
        variant === "primary"
          ? { backgroundColor: BRAND.colors.orange }
          : variant === "ghost"
          ? {}
          : { borderColor: BRAND.colors.greenBright }
      }
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.backgroundColor = BRAND.colors.orangeDark;
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.backgroundColor = BRAND.colors.orange;
      }}
    >
      {children}
    </Comp>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:shadow-[0_14px_40px_rgba(166,201,58,0.14)] transition-all overflow-hidden " +
        className
      }
      style={{ borderColor: BRAND.colors.border }}
    >
      {children}
    </div>
  );
}

function Pill({ icon: Icon, text, inverse = false }) {
  return (
    <div
      className={classNames(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm shadow-sm backdrop-blur",
        inverse ? "bg-white/10 border border-white/20 text-white" : "bg-white border"
      )}
      style={!inverse ? { borderColor: `${BRAND.colors.greenBright}55` } : undefined}
    >
      <Icon className="h-4 w-4" style={{ color: inverse ? BRAND.colors.greenBright : BRAND.colors.greenDark }} />
      <span className={inverse ? "text-white/90" : "text-slate-700"}>{text}</span>
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle, center = false }) {
  return (
    <div className={classNames("mb-8", center ? "text-center" : "")}>
      <div
        className={classNames(
          "mb-2 inline-flex items-center gap-2 text-sm font-extrabold",
          center ? "justify-center" : ""
        )}
        style={{ color: BRAND.colors.greenDark }}
      >
        <Sparkles className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
        <span>{kicker}</span>
      </div>
      <h2
        className={classNames(
          "text-2xl font-black tracking-tight sm:text-3xl",
          center ? "mx-auto" : ""
        )}
        style={{ color: BRAND.colors.greenDark }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={classNames("mt-2 max-w-2xl text-base", center ? "mx-auto" : "")} style={{ color: "#555" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border bg-white" style={{ borderColor: BRAND.colors.border }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full p-5 text-left flex items-start justify-between gap-3"
      >
        <div>
          <div className="text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
            {q}
          </div>
          {open ? <p className="mt-2 text-sm" style={{ color: "#666" }}>{a}</p> : null}
        </div>
        <ChevronDown
          className={classNames("h-5 w-5 shrink-0 transition", open ? "rotate-180" : "")}
          style={{ color: BRAND.colors.orange }}
        />
      </button>
    </div>
  );
}

function buildWaMessage({ name, zone, when, product, extras, hasPack }) {
  const lines = [
    `Hola! Quiero hacer un pedido en ${BRAND.name} 🙌`,
    "",
    `- Nombre: ${name || ""}`,
    `- Zona/Ubicación: ${zone || ""}`,
    `- Pedido: ${product || ""}${extras ? ` (${extras})` : ""}`,
    `- ¿Para HOY?: ${when || ""}`,
    `- ¿Tienes pack?: ${hasPack || "No"}`,
    "",
    `*Pedidos para el mismo día: hasta las ${BRAND.cutoffTime}*`,
    `Ventana de entrega ${BRAND.deliveryZoneName}: ${BRAND.deliveryWindow}`,
    `Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}`,
    BRAND.deliveryOutsideText,
    "",
    "Delivery GRATIS SOLO si:",
    `- Pedido grupal (≥ 3 almuerzos) en ${BRAND.deliveryZoneName} (ventana/ruta)`,
    "- Pack prepago (10 o 20) con deliveries incluidos en Centro/Prado",
  ];
  return lines.join("\n");
}

function waLinkFromMessage(msg) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export default function NutriDeliciasFitTempSite() {
  const [order, setOrder] = useState({
    name: "",
    zone: "",
    when: "Sí",
    product: "Dieta",
    extras: "",
    hasPack: "No",
  });

  const orderMsg = useMemo(() => buildWaMessage(order), [order]);
  const orderWaLink = useMemo(() => waLinkFromMessage(orderMsg), [orderMsg]);

  const packsWhatsappMessage =
    "📦 Packs prepago (saldo con bono):\n" +
    `Pack 10: pagas Bs ${PACKS.pack10.pay} y te cargamos Bs ${PACKS.pack10.credit} (+Bs ${PACKS.pack10.bonus}). Incluye 1 refresco fit + ${PACKS.pack10.deliveriesCentro} deliveries gratis ${BRAND.deliveryZoneName} (en tu ventana/ruta).\n` +
    `Validez: ${PACKS.pack10.validityDays} días.\n\n` +
    `Pack 20: pagas Bs ${PACKS.pack20.pay} y te cargamos Bs ${PACKS.pack20.credit} (+Bs ${PACKS.pack20.bonus}). Incluye 2 refrescos fit + 1 postre fit (cupón; válido desde febrero) + ${PACKS.pack20.deliveriesCentro} deliveries gratis ${BRAND.deliveryZoneName} (en tu ventana/ruta).\n` +
    `Validez: ${PACKS.pack20.validityDays} días.\n\n` +
    "Reglas de oro:\n" +
    `• Se reserva el día confirmando antes de ${BRAND.cutoffTime}.\n` +
    `• Delivery gratis solo aplica a ${BRAND.deliveryZoneName} y dentro de la ventana/ruta.\n` +
    "• Si no confirmas ese día, no se descuenta (lo usas otro día dentro de la validez).\n" +
    "• Packs son prepago (QR ✅).\n\n" +
    "¿Te lo armo?";

  const packsLink = waLinkFromMessage(packsWhatsappMessage);

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.cream} 0%, #FFFFFF 45%, ${BRAND.colors.softOrange} 100%)`,
      }}
    >
      {/* NAV */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b" style={{ borderColor: BRAND.colors.border }}>
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden grid place-items-center">
                <img src={BRAND.logoPath} alt={`${BRAND.name} logo`} className="h-9 w-9 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                  {BRAND.name}
                </div>
                <div className="text-xs" style={{ color: "#666" }}>{BRAND.city}</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm md:flex" style={{ color: BRAND.colors.greenDark }}>
              <a className="hover:opacity-80 font-bold" href={anchor.menu}>Menú</a>
              <a className="hover:opacity-80 font-bold" href={anchor.packs}>Packs</a>
              <a className="hover:opacity-80 font-bold" href={anchor.como}>Cómo funciona</a>
              <a className="hover:opacity-80 font-bold" href={anchor.faq}>FAQ</a>
              <a className="hover:opacity-80 font-bold" href={anchor.contacto}>Contacto</a>
            </nav>

            <Button href={orderWaLink}>
              Pedir por WhatsApp <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </div>

      {/* HERO (estilo Canva: gradiente verde) */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.greenDark} 0%, ${BRAND.colors.greenMid} 100%)`,
        }}
      >
        <Container>
          <div className="relative py-12 sm:py-16">
            {/* blobs */}
            <div className="absolute inset-0 -z-10 opacity-70">
              <div className="absolute -left-12 -top-20 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${BRAND.colors.greenBright}33` }} />
              <div className="absolute -right-10 top-10 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${BRAND.colors.orange}22` }} />
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
                className="space-y-5"
              >
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  <Pill inverse icon={MapPin} text={`${BRAND.city} · Delivery`} />
                  <Pill inverse icon={Clock} text={`Pedidos HOY hasta ${BRAND.cutoffTime}`} />
                  <Pill inverse icon={Truck} text={`Ventana ${BRAND.deliveryZoneName}: ${BRAND.deliveryWindow}`} />
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl font-black tracking-tight sm:text-5xl text-white">
                  {BRAND.headline}
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-xl text-base text-white/90">
                  {BRAND.subheadline}
                </motion.p>

                {/* mini badges de confianza */}
                <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Leaf, title: "Ingredientes frescos", desc: "Seleccionados y preparados a diario." },
                    { icon: Droplets, title: "Dietas sin frituras", desc: "Aceites mejores (oliva, coco, ghee) según preparación." },
                    { icon: ShieldCheck, title: "Carbo inteligente", desc: "Dietas con carbos más sostenibles (lentejas, camote, mote…)."},
                    { icon: Store, title: "Recojo disponible", desc: "Puedes recoger previa coordinación." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl text-white"
                             style={{ backgroundColor: BRAND.colors.greenBright }}>
                          <f.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-white">{f.title}</div>
                          <div className="text-sm text-white/80">{f.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                  <Button href={orderWaLink}>
                    Hacer pedido ahora <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button href={anchor.packs} variant="secondary" className="font-extrabold">
                    Ver packs
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} className="text-xs text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Info className="h-4 w-4" style={{ color: BRAND.colors.greenBright }} />
                    {BRAND.paymentsText}
                  </span>
                </motion.div>
              </motion.div>

              {/* Right: visual + pedido rápido */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:justify-self-end"
              >
                <Card className="max-w-xl">
                  <div className="relative">
                    <img src={BRAND.images.hero} alt="Almuerzo fit" className="h-56 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-sm font-black">Entrega {BRAND.deliveryWindow}</div>
                        <div className="text-xs text-white/85">{BRAND.imageNote}</div>
                      </div>
                      <div className="rounded-2xl border border-white/25 bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
                        {BRAND.deliveryZoneName} Bs {BRAND.deliveryCentroPrice}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                          Pedido en 20 segundos
                        </div>
                        <div className="text-xs" style={{ color: "#666" }}>Te abrimos WhatsApp prellenado</div>
                      </div>
                      <div
                        className="rounded-full px-3 py-1 text-xs font-extrabold text-white"
                        style={{ backgroundColor: BRAND.colors.greenBright }}
                      >
                        rápido
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>Producto</label>
                          <select
                            value={order.product}
                            onChange={(e) => setOrder((o) => ({ ...o, product: e.target.value }))}
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          >
                            <option>Dieta</option>
                            <option>Segundo</option>
                            <option>Sopa</option>
                            <option>Completo</option>
                            <option>Dieta + sopa</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>¿Para hoy?</label>
                          <select
                            value={order.when}
                            onChange={(e) => setOrder((o) => ({ ...o, when: e.target.value }))}
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          >
                            <option>Sí</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>Nombre</label>
                          <input
                            value={order.name}
                            onChange={(e) => setOrder((o) => ({ ...o, name: e.target.value }))}
                            placeholder="Tu nombre"
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          />
                        </div>
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>Zona/Ubicación</label>
                          <input
                            value={order.zone}
                            onChange={(e) => setOrder((o) => ({ ...o, zone: e.target.value }))}
                            placeholder={BRAND.deliveryZoneName + " / ..."}
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>Extras (opcional)</label>
                          <input
                            value={order.extras}
                            onChange={(e) => setOrder((o) => ({ ...o, extras: e.target.value }))}
                            placeholder="Ej: sin cebolla / más ensalada"
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          />
                        </div>
                        <div>
                          <label className="text-xs" style={{ color: "#666" }}>¿Tienes pack?</label>
                          <select
                            value={order.hasPack}
                            onChange={(e) => setOrder((o) => ({ ...o, hasPack: e.target.value }))}
                            className="mt-1 w-full rounded-2xl border bg-white px-3 py-2 text-sm"
                            style={{ borderColor: BRAND.colors.border }}
                          >
                            <option>No</option>
                            <option>Pack 10</option>
                            <option>Pack 20</option>
                          </select>
                        </div>
                      </div>

                      <div className="rounded-2xl border p-4 text-sm"
                           style={{ backgroundColor: BRAND.colors.softGreen, borderColor: `${BRAND.colors.greenBright}55` }}>
                        <div className="flex items-center justify-between">
                          <div className="font-black" style={{ color: BRAND.colors.greenDark }}>Resumen</div>
                          <div className="rounded-full px-2 py-1 text-xs font-extrabold text-white"
                               style={{ backgroundColor: BRAND.colors.orange }}>
                            HOY hasta {BRAND.cutoffTime}
                          </div>
                        </div>
                        <div className="mt-2" style={{ color: "#555" }}>
                          {order.product} · {order.when === "Sí" ? "Entrega hoy" : "Agendar"} · {BRAND.deliveryZoneName} {BRAND.deliveryWindow}
                        </div>
                        <div className="mt-2 text-xs" style={{ color: "#666" }}>
                          Delivery {BRAND.deliveryZoneName}: Bs {BRAND.deliveryCentroPrice}. {BRAND.deliveryOutsideText}.
                        </div>
                      </div>

                      <Button href={orderWaLink} className="w-full">
                        Abrir WhatsApp y pedir <ChevronRight className="h-4 w-4" />
                      </Button>

                      <div className="text-[11px]" style={{ color: "#666" }}>
                        Delivery gratis SOLO: pedido grupal ≥3 o packs (Centro/Prado dentro de ventana/ruta).
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Separador suave */}
        <svg viewBox="0 0 1440 80" className="block w-full">
          <path
            fill={BRAND.colors.cream}
            d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,49.3L1440,46L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          />
        </svg>
      </div>

      {/* MENÚ */}
      <div id="menu" className="border-t" style={{ backgroundColor: "#fff" , borderColor: BRAND.colors.border }}>
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Precios claros"
              title="Menú del día (lo más pedido)"
              subtitle={`Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}. ${BRAND.deliveryOutsideText}. Entrega ${BRAND.deliveryWindow}.`}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <img src={BRAND.images.dieta} alt="Dieta" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                      <Salad className="h-5 w-5" style={{ color: BRAND.colors.greenBright }} /> Dieta
                    </div>
                    <div className="rounded-full px-2 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND.colors.greenBright }}>
                      Top
                    </div>
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-tight" style={{ color: BRAND.colors.orange }}>
                    Bs {PRICES.dieta}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "#666" }}>
                    Carbos más sostenibles (lentejas, porotos, camote, mote, choclo…).
                  </div>
                  <div className="mt-4">
                    <Button href={waLinkFromMessage(buildWaMessage({ ...order, product: "Dieta" }))} variant="secondary" className="w-full">
                      Pedir Dieta
                    </Button>
                  </div>
                </div>
              </Card>

              <Card>
                <img src={BRAND.images.segundo} alt="Segundo" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                    <UtensilsCrossed className="h-5 w-5" style={{ color: BRAND.colors.greenBright }} /> Segundo
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-tight" style={{ color: BRAND.colors.orange }}>
                    Bs {PRICES.segundo}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "#666" }}>
                    Opción más casual: sabor del día a día, perfecta para oficina.
                  </div>
                  <div className="mt-4">
                    <Button href={waLinkFromMessage(buildWaMessage({ ...order, product: "Segundo" }))} variant="secondary" className="w-full">
                      Pedir Segundo
                    </Button>
                  </div>
                </div>
              </Card>

              <Card>
                <img src={BRAND.images.sopa} alt="Sopa" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                    <Soup className="h-5 w-5" style={{ color: BRAND.colors.greenBright }} /> Sopa
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-tight" style={{ color: BRAND.colors.orange }}>
                    Bs {PRICES.sopa}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "#666" }}>
                    Sopa diaria y variada (1 por día). Ideal para combinar.
                  </div>
                  <div className="mt-4">
                    <Button href={waLinkFromMessage(buildWaMessage({ ...order, product: "Sopa" }))} variant="secondary" className="w-full">
                      Pedir Sopa
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="border-2" style={{ borderColor: `${BRAND.colors.orange}55` }}>
                <img src={BRAND.images.completo} alt="Completo" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                      <BadgeCheck className="h-5 w-5" style={{ color: BRAND.colors.orange }} /> Completo
                    </div>
                    <div className="rounded-full px-2 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND.colors.orange }}>
                      Best
                    </div>
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-tight" style={{ color: BRAND.colors.orange }}>
                    Bs {PRICES.completo}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: "#666" }}>
                    Sopa + Segundo (más saciedad y comodidad).
                  </div>
                  <div className="mt-4">
                    <Button href={waLinkFromMessage(buildWaMessage({ ...order, product: "Completo" }))} className="w-full">
                      Pedir Completo
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border p-5 text-sm" style={{ backgroundColor: BRAND.colors.surface, borderColor: BRAND.colors.border }}>
                <div className="font-black" style={{ color: BRAND.colors.greenDark }}>Extras</div>
                <div className="mt-3 grid gap-2" style={{ color: "#555" }}>
                  <div className="flex items-center justify-between"><span>Dieta + sopa</span><b>Bs {PRICES.dietaConSopa}</b></div>
                  <div className="flex items-center justify-between"><span>Sopa extra</span><b>Bs {PRICES.sopaExtra}</b></div>
                  <div className="flex items-center justify-between"><span>Delivery {BRAND.deliveryZoneName}</span><b>Bs {BRAND.deliveryCentroPrice}</b></div>
                  <div className="text-xs" style={{ color: "#666" }}>{BRAND.deliveryOutsideText}.</div>
                </div>
              </div>

              <div className="rounded-2xl border p-5 text-sm" style={{ backgroundColor: BRAND.colors.softOrange, borderColor: `${BRAND.colors.orange}33` }}>
                <div className="font-black" style={{ color: BRAND.colors.greenDark }}>Haz tu pedido a tiempo!</div>
                <div className="mt-1" style={{ color: "#555" }}>
                  Más si te pasas de la hora :D <b>“{BRAND.cutoffTime}”</b>. de todas formas pregunta disponibilidad 😃.
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs" style={{ color: "#666" }}>{BRAND.imageNote}</div>
          </div>
        </Container>
      </div>

      {/* PACKS (fondo suave tipo Canva) */}
      <div id="packs" className="border-t" style={{ background: `linear-gradient(180deg, ${BRAND.colors.surface} 0%, #FFFFFF 100%)`, borderColor: BRAND.colors.border }}>
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Ahorro + comodidad"
              title="Packs prepago (saldo con bono)"
              subtitle={`Deliveries gratis SOLO en ${BRAND.deliveryZoneName} dentro de ventana/ruta.`}
            />

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND.colors.greenBright }}>
                  <Wallet className="h-4 w-4" /> {PACKS.pack10.title}
                </div>
                <div className="text-sm" style={{ color: "#666" }}>{PACKS.pack10.subtitle}</div>
                <div className="mt-3 text-lg font-black" style={{ color: BRAND.colors.greenDark }}>
                  Pagas Bs {PACKS.pack10.pay} → saldo Bs {PACKS.pack10.credit}
                </div>
                <div className="mt-2 rounded-xl px-3 py-2 text-sm font-extrabold"
                     style={{ backgroundColor: BRAND.colors.softOrange, color: BRAND.colors.orange }}>
                  + Bs {PACKS.pack10.bonus} de bono 🎉 · Validez {PACKS.pack10.validityDays} días
                </div>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#555" }}>
                  <li className="flex items-center gap-2"><Gift className="h-4 w-4" style={{ color: BRAND.colors.orange }} /> {PACKS.pack10.gifts[0]}</li>
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> {PACKS.pack10.deliveriesCentro} deliveries gratis {BRAND.deliveryZoneName}</li>
                  <li className="text-xs" style={{ color: "#777" }}>{PACKS.pack10.note}</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLinkFromMessage(buildWaMessage({ ...order, hasPack: "Pack 10", product: "Quiero Pack 10" }))} className="w-full">
                    Quiero Pack 10 (QR)
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-2" style={{ borderColor: `${BRAND.colors.orange}55` }}>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND.colors.orange }}>
                  <Wallet className="h-4 w-4" /> {PACKS.pack20.title}
                </div>
                <div className="text-sm" style={{ color: "#666" }}>{PACKS.pack20.subtitle}</div>
                <div className="mt-3 text-lg font-black" style={{ color: BRAND.colors.greenDark }}>
                  Pagas Bs {PACKS.pack20.pay} → saldo Bs {PACKS.pack20.credit}
                </div>
                <div className="mt-2 rounded-xl px-3 py-2 text-sm font-extrabold"
                     style={{ backgroundColor: BRAND.colors.softOrange, color: BRAND.colors.orange }}>
                  + Bs {PACKS.pack20.bonus} de bono 🎉 · Validez {PACKS.pack20.validityDays} días
                </div>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#555" }}>
                  {PACKS.pack20.gifts.map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <Gift className="mt-0.5 h-4 w-4" style={{ color: BRAND.colors.orange }} />
                      <span>{g}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> {PACKS.pack20.deliveriesCentro} deliveries gratis {BRAND.deliveryZoneName}</li>
                  <li className="text-xs" style={{ color: "#777" }}>{PACKS.pack20.note}</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLinkFromMessage(buildWaMessage({ ...order, hasPack: "Pack 20", product: "Quiero Pack 20" }))} className="w-full">
                    Quiero Pack 20 (QR)
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND.colors.greenDark }}>
                  <Users className="h-4 w-4" /> Pedido grupal (≥ 3)
                </div>
                <div className="text-lg font-black" style={{ color: BRAND.colors.greenDark }}>Delivery gratis (condiciones)</div>
                <div className="mt-1 text-sm" style={{ color: "#666" }}>Para oficinas o equipos (una ubicación).</div>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#555" }}>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenBright }} /> ≥ 3 almuerzos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenBright }} /> Solo {BRAND.deliveryZoneName} (ventana/ruta)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenBright }} /> Una sola ubicación</li>
                </ul>
                <div className="mt-5">
                  <Button href={orderWaLink} variant="secondary" className="w-full">Armar pedido grupal</Button>
                </div>
              </Card>
            </div>

            <div className="mt-6 rounded-2xl border bg-white p-5 text-sm" style={{ borderColor: BRAND.colors.border }}>
              <div className="flex items-center gap-2 font-black" style={{ color: BRAND.colors.greenDark }}>
                <Wallet className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
                Cómo se usa el saldo (sin enredos)
              </div>
              <div className="mt-2" style={{ color: "#666" }}>Cada día se descuenta del saldo según lo que elijas:</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  ["Segundo", `Bs ${PRICES.segundo}`],
                  ["Dieta", `Bs ${PRICES.dieta}`],
                  ["Completo (sopa + segundo)", `Bs ${PRICES.completo}`],
                  ["Dieta + sopa", `Bs ${PRICES.dietaConSopa}`],
                  ["Sopa extra", `Bs ${PRICES.sopaExtra}`],
                  ["Delivery", `${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice} / otras zonas: según ubicación`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-3 rounded-2xl border px-4 py-3"
                       style={{ backgroundColor: BRAND.colors.surface, borderColor: BRAND.colors.border }}>
                    <div className="text-sm font-extrabold" style={{ color: BRAND.colors.greenDark }}>{k}</div>
                    <div className="text-sm text-right" style={{ color: "#555" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border p-5 text-sm" style={{ backgroundColor: BRAND.colors.softGreen, borderColor: `${BRAND.colors.greenBright}55` }}>
              <div className="font-black" style={{ color: BRAND.colors.greenDark }}>Mensaje listo para WhatsApp (/packs)</div>
              <div className="mt-2 rounded-2xl border bg-white p-4 whitespace-pre-line text-sm" style={{ borderColor: BRAND.colors.border }}>
                {packsWhatsappMessage}
              </div>
              <div className="mt-3">
                <Button href={packsLink} variant="secondary">Enviar mensaje de packs</Button>
              </div>
              <div className="mt-2 text-xs" style={{ color: "#666" }}>Tip: guárdalo como respuesta rápida en WhatsApp Business.</div>
            </div>
          </div>
        </Container>
      </div>

      {/* CÓMO FUNCIONA */}
      <div id="como-funciona" className="border-t bg-white" style={{ borderColor: BRAND.colors.border }}>
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Simple y rápido"
              title="Cómo funciona"
              subtitle="Mientras más claro, más compra. Sin vueltas."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { step: "1", title: `Pide antes de las ${BRAND.cutoffTime}`, desc: "Para recibir el mismo día, manda tu pedido temprano.", icon: Clock },
                { step: "2", title: `Entregamos ${BRAND.deliveryWindow}`, desc: `En ${BRAND.deliveryZoneName} trabajamos por ventana/ruta para ser puntuales.`, icon: Truck },
                { step: "3", title: "Ahorra con packs", desc: "Prepago por QR, saldo con bono, y te olvidas de decidir cada día.", icon: Wallet },
              ].map((s) => (
                <Card key={s.step} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl text-sm font-black text-white"
                         style={{ backgroundColor: BRAND.colors.greenBright }}>
                      {s.step}
                    </div>
                    <s.icon className="h-5 w-5" style={{ color: BRAND.colors.orange }} />
                  </div>
                  <div className="text-base font-black" style={{ color: BRAND.colors.greenDark }}>{s.title}</div>
                  <p className="mt-2 text-sm" style={{ color: "#666" }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* TESTIMONIOS */}
      <div id="testimonios" className="border-t" style={{ borderColor: BRAND.colors.border }}>
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Confianza"
              title="Lo que dice la gente"
              subtitle="Por ahora son ejemplos. Luego reemplazamos por capturas reales de WhatsApp."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "Cliente oficina", quote: "Me resolvió los almuerzos de la semana. Rico, rápido y me siento más liviano.", stars: 5 },
                { name: "Cliente fitness", quote: "La dieta está buenísima. Por fin algo saludable que no sabe a castigo.", stars: 5 },
                { name: "Cliente pack", quote: "Compré pack y listo: pido, descuentan del saldo y me olvido. Súper práctico.", stars: 5 },
              ].map((t) => (
                <Card key={t.name} className="p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm" style={{ color: "#555" }}>“{t.quote}”</p>
                  <div className="mt-4 text-sm font-black" style={{ color: BRAND.colors.greenDark }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#777" }}>{BRAND.city}</div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div id="faq" className="border-t bg-white" style={{ borderColor: BRAND.colors.border }}>
        <Container>
          <div className="py-12">
            <SectionTitle kicker="Preguntas" title="FAQ" subtitle="Menos dudas = más pedidos." />
            <div className="grid gap-4 md:grid-cols-2">
              <FAQItem q="¿Hasta qué hora puedo pedir para recibir HOY?" a={`Hasta las ${BRAND.cutoffTime}. Después, se agenda para el siguiente día hábil.`} />
              <FAQItem q={`¿Cuál es la ventana de entrega en ${BRAND.deliveryZoneName}?`} a={`Entregamos entre ${BRAND.deliveryWindow}. Trabajamos por ruta para ser puntuales.`} />
              <FAQItem q="¿Cuánto cuesta el delivery?" a={`Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}. ${BRAND.deliveryOutsideText}.`} />
              <FAQItem q="¿Cuándo es delivery GRATIS?" a={`Solo en ${BRAND.deliveryZoneName} y dentro de ventana/ruta: (1) pedido grupal ≥ 3 almuerzos, o (2) packs prepago con deliveries incluidos.`} />
              <FAQItem q="¿Qué es un pack prepago?" a="Es un saldo con bono: pagas menos y te cargamos más saldo. Se descuenta según lo que pidas cada día." />
              <FAQItem q="¿Cómo pago?" a="Pedidos normales: efectivo o QR. Packs: prepago por QR ✅." />
              <FAQItem q="¿Puedo recoger mi pedido?" a="Sí. Hay opción de recojo previa coordinación por WhatsApp." />
              <FAQItem q="¿Las dietas llevan fritura?" a="No. Las dietas son libres de frituras. Priorizamos ingredientes frescos y opciones más saludables." />
            </div>
          </div>
        </Container>
      </div>

      {/* CTA FINAL (estilo Canva: naranja + empuje a compra) */}
      <div id="contacto" className="border-t" style={{ borderColor: BRAND.colors.border }}>
        <div
          className="py-14"
          style={{ background: `linear-gradient(135deg, ${BRAND.colors.orange} 0%, #FF7A4D 100%)` }}
        >
          <Container>
            <SectionTitle
              kicker="Listo para pedir"
              title="¿Listo para comer saludable sin complicarte?"
              subtitle={`Escríbenos antes de las ${BRAND.cutoffTime} y te ayudamos a elegir. Entrega ${BRAND.deliveryWindow}.`}
              center
            />
            <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={orderWaLink} className="bg-white text-black shadow-none" variant="secondary">
                Hablar por WhatsApp <ChevronRight className="h-4 w-4" />
              </Button>
              <Button href={anchor.packs} variant="ghost" className="border border-white/30">
                Ver packs
              </Button>
            </div>

            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-white/90">
              <div className="font-black text-white">Resumen rápido</div>
              <div className="mt-2">
                • Pedidos HOY: hasta {BRAND.cutoffTime}. <br />
                • Entrega {BRAND.deliveryZoneName}: {BRAND.deliveryWindow}. <br />
                • Delivery {BRAND.deliveryZoneName}: Bs {BRAND.deliveryCentroPrice}. <br />
                • {BRAND.deliveryOutsideText}. <br />
                • {BRAND.paymentsText}
              </div>
            </div>
          </Container>
        </div>

        {/* FOOTER (negro pro, acentos verdes) */}
        <footer style={{ backgroundColor: BRAND.colors.black }} className="py-10">
          <Container>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="text-2xl font-black" style={{ color: BRAND.colors.greenBright }}>
                {BRAND.name}
              </div>
              <div className="text-sm text-white/80">🥗 Comida saludable lista para ti · {BRAND.city}</div>
              <div className="text-sm font-bold" style={{ color: BRAND.colors.greenBright }}>
                {BRAND.schedule} · Entrega {BRAND.deliveryWindow}
              </div>

              <div className="mt-3 flex items-center gap-4">
                <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="text-white hover:text-white/80">
                  <Instagram />
                </a>
                <a href={BRAND.facebookUrl} target="_blank" rel="noreferrer" className="text-white hover:text-white/80">
                  <Facebook />
                </a>
                <a href={orderWaLink} target="_blank" rel="noreferrer" className="text-white hover:text-white/80">
                  <Phone />
                </a>
              </div>

              <div className="mt-6 w-full border-t border-white/15 pt-4 text-xs text-white/60">
                © {new Date().getFullYear()} {BRAND.name}. Sitio temporal.
              </div>
            </div>
          </Container>
        </footer>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
        <Container>
          <div className="rounded-2xl border bg-white/90 p-2 shadow-lg backdrop-blur" style={{ borderColor: BRAND.colors.border }}>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate text-sm font-black" style={{ color: BRAND.colors.greenDark }}>
                  Pedir ahora
                </div>
                <div className="truncate text-xs" style={{ color: "#666" }}>
                  Hoy hasta {BRAND.cutoffTime} · Entrega {BRAND.deliveryWindow}
                </div>
              </div>
              <div className="flex gap-2">
                <Button href={anchor.packs} variant="secondary" className="px-3">Packs</Button>
                <Button href={orderWaLink} className="px-3">
                  WhatsApp <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
