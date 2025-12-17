import React from "react";
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
} from "lucide-react";

// ✅ Landing temporal (1 archivo) — React + Tailwind (mobile-first)
// ✅ Edita SOLO estas constantes y queda lista.
const BRAND = {
  name: "NutriDeliciasFit",
  tagline: "Comida saludable a domicilio — rica, práctica y constante",
  city: "Cercado - Cochabamba",
  schedule: "Lunes a Viernes",

  // WhatsApp (Bolivia 591 + número, solo dígitos, sin +)
  whatsappNumber: "59168459468",

  instagramUrl: "https://instagram.com/nutrideliciasfit",
  facebookUrl: "https://www.facebook.com/share/1FsJrztm6A/",

  // Operación
  cutoffTime: "09:00 am",

  // Delivery
  deliveryZoneName: "Centro/Prado",
  deliveryCentroPrice: 7,
  deliveryOutsideText: "Fuera de Centro/Prado: precio según ubicación",

  // Colores base (logoND1)
  colors: {
    greenDark: "#223A1D",
    greenBright: "#8EAE39",
    orange: "#E15623",
    gold: "#AB912C",
  },

  // Logo
  // 👉 Coloca el archivo en: /public/LogoND1.jpg
  logoPath: "/logo3.jpg",
};

const PRICES = {
  dieta: 20,
  segundo: 18,
  sopa: 10,
  completo: 22, // sopa + segundo
  dietaConSopa: 25,
  sopaExtra: 10,
};

const PACKS = {
  pack10: {
    title: "Pack 10 (Prepago)",
    pay: 190,
    credit: 200,
    bonus: 10,
    gifts: ["1 refresco fit"],
    deliveriesCentro: 2,
    note: "Deliveries gratis solo en Centro/Prado (dentro de ventana/ruta).",
  },
  pack20: {
    title: "Pack 20 (Prepago)",
    pay: 370,
    credit: 400,
    bonus: 30,
    gifts: ["2 refrescos fit", "1 postre fit (cupón) — válido desde febrero"],
    deliveriesCentro: 5,
    note: "Deliveries gratis solo en Centro/Prado (dentro de ventana/ruta).",
  },
};

const waLink = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
  `Hola! Quiero hacer un pedido en ${BRAND.name} 🙌

- Nombre:
- Zona/Ubicación:
- Pedido (Dieta / Segundo / Sopa / Completo / Dieta + sopa):
- ¿Para HOY? (Sí/No):
- Hora deseada:
- ¿Tienes pack prepago? (Pack 10 / Pack 20 / No):

*Pedidos para el mismo día: hasta las ${BRAND.cutoffTime}*
Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}
${BRAND.deliveryOutsideText}

Delivery GRATIS SOLO si:
- Pedido grupal (≥ 3 almuerzos) en ${BRAND.deliveryZoneName} (ventana/ruta)
- Pack prepago (10 o 20) con deliveries gratis en ${BRAND.deliveryZoneName}
`
)}`;

const packsWhatsappMessage = `📦 Packs prepago (saldo con bono):
Pack 10: pagas Bs 190 y te cargamos Bs 200 (+Bs 10). Incluye 1 refresco fit + 2 deliveries gratis Centro/Prado.
Pack 20: pagas Bs 370 y te cargamos Bs 400 (+Bs 30). Incluye 2 refrescos fit + 1 postre fit (cupón) + 5 deliveries gratis Centro/Prado.
¿Te lo armo? (QR ✅)`;

const anchor = {
  menu: "#menu",
  planes: "#planes",
  como: "#como-funciona",
  testimonios: "#testimonios",
  faq: "#faq",
  contacto: "#contacto",
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-[#8EAE39]/25 bg-white/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
    <Icon className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} />
    <span className="text-slate-700">{text}</span>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mb-8">
    <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
      <Sparkles className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
      <span>{kicker}</span>
    </div>
    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-2 max-w-2xl text-base text-slate-600">{subtitle}</p>
    ) : null}
  </div>
);

function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow " +
        className
      }
    >
      {children}
    </div>
  );
}

function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "text-white shadow-sm"
      : "bg-white text-slate-900 border hover:bg-slate-50";

  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      className={`${base} ${styles}`}
      style={
        variant === "primary"
          ? { backgroundColor: BRAND.colors.greenDark }
          : undefined
      }
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.backgroundColor = BRAND.colors.orange;
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.backgroundColor = BRAND.colors.greenDark;
      }}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </Comp>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function NutriDeliciasFitTempSite() {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background:
          "linear-gradient(180deg, #F6FAF1 0%, #FFFFFF 45%, #FFF4EE 100%)",
      }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden grid place-items-center">
                <img
                  src={BRAND.logoPath}
                  alt={`${BRAND.name} logo`}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  {BRAND.name}
                </div>
                <div className="text-xs text-slate-600">{BRAND.tagline}</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
              <a className="hover:text-slate-900" href={anchor.menu}>
                Menú
              </a>
              <a className="hover:text-slate-900" href={anchor.planes}>
                Packs
              </a>
              <a className="hover:text-slate-900" href={anchor.como}>
                Cómo funciona
              </a>
              <a className="hover:text-slate-900" href={anchor.faq}>
                FAQ
              </a>
              <a className="hover:text-slate-900" href={anchor.contacto}>
                Contacto
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button href={waLink}>
                Pedir por WhatsApp <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Container>
        <div className="relative py-10 sm:py-14">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div
              className="absolute left-0 top-0 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${BRAND.colors.greenBright}33` }}
            />
            <div
              className="absolute right-0 top-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${BRAND.colors.orange}22` }}
            />
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
                <Pill icon={MapPin} text={`${BRAND.city} · Delivery`} />
                <Pill icon={Clock} text={`${BRAND.schedule} · Pedidos HOY hasta ${BRAND.cutoffTime}`} />
                <Pill
                  icon={Truck}
                  text={`Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}`}
                />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Come saludable sin complicarte.
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-xl text-base text-slate-600">
                Almuerzos diarios, dietas, sopa y completo. Ideal para oficina,
                entrenamiento o simplemente cuidarte sin perder sabor.
              </motion.p>

              {/* Rules / Conversion box */}
              <motion.div variants={fadeUp}>
                <div
                  className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur"
                  style={{ borderColor: `${BRAND.colors.greenBright}40` }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: BRAND.colors.orange }}
                    >
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-slate-700">
                      <div className="font-semibold" style={{ color: BRAND.colors.greenDark }}>
                        Reglas de oro (claras y sin enredos)
                      </div>
                      <ul className="mt-2 space-y-1 text-slate-600">
                        <li>
                          • Se reserva el día confirmando antes de <b>{BRAND.cutoffTime}</b>.
                        </li>
                        <li>
                          • Delivery {BRAND.deliveryZoneName}: <b>Bs {BRAND.deliveryCentroPrice}</b>. {BRAND.deliveryOutsideText}.
                        </li>
                        <li>
                          • Delivery gratis SOLO aplica a <b>{BRAND.deliveryZoneName}</b> y dentro de la ventana/ruta.
                        </li>
                        <li>
                          • Si no confirmas ese día, no se descuenta (lo usas otro día dentro de la validez).
                        </li>
                        <li>• Packs: prepago por QR.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <Button href={waLink}>
                  Hacer pedido ahora <ChevronRight className="h-4 w-4" />
                </Button>
                <Button href={anchor.planes} variant="secondary">
                  Ver packs
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                {["Sabor casero", "Porciones equilibradas", "Delivery rápido", "Packs con bono (saldo)"].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} />
                      <span>{t}</span>
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:justify-self-end"
            >
              <Card className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                        Pedido rápido
                      </div>
                      <div className="text-xs text-slate-600">WhatsApp prellenado</div>
                    </div>
                    <div
                      className="rounded-2xl border bg-white px-3 py-1 text-xs"
                      style={{ borderColor: `${BRAND.colors.greenBright}55`, color: BRAND.colors.orange }}
                    >
                      20s
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
                    <div className="font-semibold">Hola! Quiero hacer un pedido 🙌</div>
                    <div className="mt-2 whitespace-pre-line">
                      {`- Nombre:
- Zona/Ubicación:
- Pedido (Dieta / Segundo / Sopa / Completo / Dieta + sopa):
- ¿Para HOY? (Sí/No):
- Hora deseada:
- ¿Tienes pack? (10/20/No):`}
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Hoy hasta {BRAND.cutoffTime}. Delivery {BRAND.deliveryZoneName} Bs {BRAND.deliveryCentroPrice}.
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button href={waLink}>
                      Abrir WhatsApp <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 border-t bg-white p-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Salad className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} />
                    <span>Dieta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} />
                    <span>Segundo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Soup className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} />
                    <span>Sopa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
                    <span>Packs</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Menu */}
      <div id="menu" className="border-t bg-white">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Precios claros"
              title="Lo más pedido"
              subtitle={`Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}. ${BRAND.deliveryOutsideText}.`}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    <Salad className="h-5 w-5" /> Dieta
                  </div>
                  <div className="rounded-full px-2 py-1 text-xs text-white" style={{ backgroundColor: BRAND.colors.greenDark }}>
                    Top
                  </div>
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">Bs {PRICES.dieta}</div>
                <div className="text-xs text-slate-500">por unidad</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Proteína + carbo + ensalada/verduras</li>
                  <li>• Porción controlada</li>
                  <li>• Ideal para objetivos fitness</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink} variant="secondary">
                    Pedir Dieta
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  <UtensilsCrossed className="h-5 w-5" /> Segundo
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">Bs {PRICES.segundo}</div>
                <div className="text-xs text-slate-500">por unidad</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Sabor casero</li>
                  <li>• Enfoque más saludable</li>
                  <li>• Perfecto para oficina</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink} variant="secondary">
                    Pedir Segundo
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  <Soup className="h-5 w-5" /> Sopa
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">Bs {PRICES.sopa}</div>
                <div className="text-xs text-slate-500">por unidad</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Ideal para días fríos</li>
                  <li>• Opción ligera</li>
                  <li>• Se puede combinar con dieta</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink} variant="secondary">
                    Pedir Sopa
                  </Button>
                </div>
              </Card>

              <Card className="p-6" style={{ borderColor: `${BRAND.colors.orange}40` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    <BadgeCheck className="h-5 w-5" style={{ color: BRAND.colors.orange }} /> Completo
                  </div>
                  <div className="rounded-full px-2 py-1 text-xs text-white" style={{ backgroundColor: BRAND.colors.orange }}>
                    Best
                  </div>
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">Bs {PRICES.completo}</div>
                <div className="text-xs text-slate-500">sopa + segundo</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Más saciedad</li>
                  <li>• Excelente para oficina</li>
                  <li>• Opción más completa</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink}>Pedir Completo</Button>
                </div>
              </Card>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border bg-slate-50 p-5 text-sm text-slate-700">
                <div className="font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Extras rápidos
                </div>
                <div className="mt-2 grid gap-2 text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Dieta + sopa</span>
                    <b>Bs {PRICES.dietaConSopa}</b>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sopa extra</span>
                    <b>Bs {PRICES.sopaExtra}</b>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery {BRAND.deliveryZoneName}</span>
                    <b>Bs {BRAND.deliveryCentroPrice}</b>
                  </div>
                  <div className="text-xs">{BRAND.deliveryOutsideText}.</div>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-5 text-sm text-slate-700">
                
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Packs */}
      <div id="planes" className="border-t">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Saldo con bono"
              title="Packs prepago"
              subtitle={`Pagas menos y te cargamos más saldo. Además: deliveries gratis SOLO en ${BRAND.deliveryZoneName} y dentro de la ventana/ruta.`}
            />

            <div className="grid gap-4 md:grid-cols-3">
              {/* Pack 10 */}
              <Card className="p-6" style={{ borderColor: `${BRAND.colors.gold}55` }}>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: BRAND.colors.gold }}>
                  <Wallet className="h-4 w-4" /> {PACKS.pack10.title}
                </div>
                <div className="text-lg font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Pagas Bs {PACKS.pack10.pay} → saldo Bs {PACKS.pack10.credit}
                </div>
                <div className="mt-1 text-sm text-slate-600">+ Bs {PACKS.pack10.bonus} bono</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Gift className="h-4 w-4" style={{ color: BRAND.colors.orange }} /> {PACKS.pack10.gifts[0]}</li>
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> {PACKS.pack10.deliveriesCentro} deliveries gratis {BRAND.deliveryZoneName}</li>
                  <li className="text-xs text-slate-500">{PACKS.pack10.note}</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink}>Quiero Pack 10 (QR)</Button>
                </div>
              </Card>

              {/* Pack 20 */}
              <Card className="p-6" style={{ borderColor: `${BRAND.colors.orange}55` }}>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: BRAND.colors.orange }}>
                  <Wallet className="h-4 w-4" /> {PACKS.pack20.title}
                </div>
                <div className="text-lg font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Pagas Bs {PACKS.pack20.pay} → saldo Bs {PACKS.pack20.credit}
                </div>
                <div className="mt-1 text-sm text-slate-600">+ Bs {PACKS.pack20.bonus} bono</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {PACKS.pack20.gifts.map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <Gift className="mt-0.5 h-4 w-4" style={{ color: BRAND.colors.orange }} />
                      <span>{g}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> {PACKS.pack20.deliveriesCentro} deliveries gratis {BRAND.deliveryZoneName}</li>
                  <li className="text-xs text-slate-500">{PACKS.pack20.note}</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink}>Quiero Pack 20 (QR)</Button>
                </div>
              </Card>

              {/* Grupal */}
              <Card className="p-6" style={{ borderColor: `${BRAND.colors.greenBright}55` }}>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: BRAND.colors.greenDark }}>
                  <Users className="h-4 w-4" /> Pedido Grupal (≥ 3)
                </div>
                <div className="text-lg font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Delivery gratis (condiciones)
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Para oficinas y equipos.
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> ≥ 3 almuerzos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> Solo {BRAND.deliveryZoneName} (ventana/ruta)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.colors.greenDark }} /> Una sola ubicación</li>
                </ul>
                <div className="mt-5">
                  <Button href={waLink} variant="secondary">Armar pedido grupal</Button>
                </div>
              </Card>
            </div>

            {/* How the saldo works */}
            <div className="mt-6 rounded-2xl border bg-white p-5 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-semibold" style={{ color: BRAND.colors.greenDark }}>
                <Wallet className="h-4 w-4" style={{ color: BRAND.colors.orange }} />
                Cómo se usa el saldo (sin enredos)
              </div>
              <div className="mt-2 text-slate-600">
                Cada día se descuenta del saldo el precio del producto elegido:
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[ 
                  ["Segundo", `Bs ${PRICES.segundo}`],
                  ["Dieta", `Bs ${PRICES.dieta}`],
                  ["Completo (sopa + segundo)", `Bs ${PRICES.completo}`],
                  ["Dieta + sopa", `Bs ${PRICES.dietaConSopa}`],
                  ["Sopa extra", `Bs ${PRICES.sopaExtra}`],
                  ["Delivery", `${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice} / otras zonas: según ubicación`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-3 rounded-2xl border bg-slate-50 px-4 py-3">
                    <div className="text-sm font-medium" style={{ color: BRAND.colors.greenDark }}>{k}</div>
                    <div className="text-sm text-slate-700 text-right">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp /packs message */}
            <div className="mt-6 rounded-2xl border bg-slate-50 p-5 text-sm text-slate-700">
              <div className="font-semibold" style={{ color: BRAND.colors.greenDark }}>
                Mensaje listo para WhatsApp (/packs)
              </div>
              <div className="mt-2 rounded-2xl border bg-white p-4 whitespace-pre-line text-sm">
                {packsWhatsappMessage}
              </div>
              <div className="mt-3">
                <Button
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(packsWhatsappMessage)}`}
                  variant="secondary"
                >
                  Enviar mensaje de packs
                </Button>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Tip: pega este texto como respuesta rápida en WhatsApp Business.
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* How it works */}
      <div id="como-funciona" className="border-t bg-white">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Simple"
              title="Cómo funciona"
              subtitle="En 10 segundos el cliente entiende y compra."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: `Pide antes de las ${BRAND.cutoffTime}`,
                  desc: "Para recibir el mismo día, manda tu pedido temprano.",
                },
                {
                  step: "2",
                  title: "Confirmamos zona y ventana",
                  desc: "Te confirmamos delivery y horario según ruta.",
                },
                {
                  step: "3",
                  title: "Ahorra con packs",
                  desc: "Pagas prepago por QR y usas tu saldo día a día.",
                },
              ].map((s) => (
                <Card key={s.step} className="p-6">
                  <div
                    className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                    style={{ backgroundColor: BRAND.colors.orange }}
                  >
                    {s.step}
                  </div>
                  <div className="text-base font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials */}
      <div id="testimonios" className="border-t">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Confianza"
              title="Lo que dice la gente"
            />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Cliente 1",
                  quote:
                    "Me resolvió los almuerzos de la semana. Rico, rápido y me siento más liviano.",
                },
                {
                  name: "Cliente 2",
                  quote:
                    "La dieta está buenísima. Por fin algo saludable que no sabe a castigo.",
                },
                {
                  name: "Cliente 3",
                  quote:
                    "Perfecto para oficina. Pedí pack y ya no estoy pensando en qué comer.",
                },
              ].map((t) => (
                <Card key={t.name} className="p-6">
                  <p className="text-sm text-slate-700">“{t.quote}”</p>
                  <div className="mt-4 text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{BRAND.city}</div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div id="faq" className="border-t bg-white">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Preguntas"
              title="FAQ"
              subtitle="Mientras menos dudas, más pedidos."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "¿Hasta qué hora puedo pedir para recibir HOY?",
                  a: `Hasta las ${BRAND.cutoffTime}. Después, se agenda para el siguiente día hábil.`,
                },
                {
                  q: "¿Cuánto cuesta el delivery?",
                  a: `Delivery ${BRAND.deliveryZoneName}: Bs ${BRAND.deliveryCentroPrice}. ${BRAND.deliveryOutsideText}.`,
                },
                {
                  q: "¿Cuándo es delivery GRATIS?",
                  a: `Solo aplica en ${BRAND.deliveryZoneName} y dentro de la ventana/ruta: (1) pedido grupal ≥3, o (2) packs prepago con deliveries gratis incluidos.`,
                },
                {
                  q: "¿Qué es un pack prepago?",
                  a: "Es un saldo con bono: pagas menos y te cargamos más saldo. Se descuenta según lo que pidas cada día.",
                },
                {
                  q: "¿Si no confirmo ese día, pierdo el saldo?",
                  a: "No. Si no confirmas, no se descuenta. Lo usas otro día dentro de la validez del pack.",
                },
                {
                  q: "¿Cómo pago el pack?",
                  a: "Prepago por QR. Te lo armamos por WhatsApp y listo.",
                },
              ].map((f) => (
                <Card key={f.q} className="p-6">
                  <div className="text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    {f.q}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Contact */}
      <div id="contacto" className="border-t">
        <Container>
          <div className="py-12">
            <SectionTitle
              kicker="Listo para pedir"
              title="Contacto"
              subtitle={`¿Pedido para hoy? Escríbenos antes de las ${BRAND.cutoffTime}.`}
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <div className="text-base font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Pide por WhatsApp
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Toca el botón y se abre el pedido prellenado.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button href={waLink}>
                    Abrir WhatsApp <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button href={anchor.planes} variant="secondary">
                    Ver packs
                  </Button>
                </div>

                <div className="mt-5 rounded-2xl border bg-white p-4 text-sm text-slate-700">
                  <div className="font-semibold" style={{ color: BRAND.colors.greenDark }}>
                    Resumen rápido
                  </div>
                  <div className="mt-2 text-slate-600">
                    <div>• Pedidos HOY: hasta {BRAND.cutoffTime}.</div>
                    <div>• Delivery {BRAND.deliveryZoneName}: Bs {BRAND.deliveryCentroPrice}.</div>
                    <div>• {BRAND.deliveryOutsideText}.</div>
                    <div>• Delivery gratis solo aplica a {BRAND.deliveryZoneName} (ventana/ruta) + condiciones.</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Redes
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm hover:bg-slate-50"
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="h-4 w-4" style={{ color: BRAND.colors.orange }} /> Instagram
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm hover:bg-slate-50"
                    href={BRAND.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="h-4 w-4" style={{ color: BRAND.colors.orange }} /> Facebook
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm hover:bg-slate-50"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Phone className="h-4 w-4" style={{ color: BRAND.colors.orange }} /> WhatsApp
                  </a>
                </div>

                
              </Card>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              © {new Date().getFullYear()} {BRAND.name}. Sitio temporal.
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
        <Container>
          <div className="rounded-2xl border bg-white/85 p-2 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold" style={{ color: BRAND.colors.greenDark }}>
                  Pedir por WhatsApp
                </div>
                <div className="truncate text-xs text-slate-600">
                  Hoy hasta {BRAND.cutoffTime} · Delivery {BRAND.deliveryZoneName} Bs {BRAND.deliveryCentroPrice}
                </div>
              </div>
              <Button href={waLink}>
                Pedir <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
