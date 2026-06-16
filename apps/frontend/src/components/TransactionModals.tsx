import { useMemo, useState } from "react";
import { useAppStore } from "../app/store";
import type { RiskLevel } from "../app/types";
import { RiskBadge } from "./RiskBadge";

function formatCurrency(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function ModalShell({
  isOpen,
  title,
  maxWidth,
  onClose,
  children,
  footer
}: {
  readonly isOpen: boolean;
  readonly title: string;
  readonly maxWidth?: number;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
  readonly footer?: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal" style={{ maxWidth }}>
        <div className="modal__header">
          <h2 className="modal__title text-gold">{title}</h2>
          <button className="modal__close" onClick={onClose} type="button">
            ×
          </button>
        </div>
        <div className="modal__body">{children}</div>
        {footer ? <div className="modal__footer">{footer}</div> : null}
      </div>
    </div>
  );
}

interface BuyInFormState {
  step: number;
  amount: number;
  paymentMethod: "EFECTIVO" | "TARJETA" | "TRANSFERENCIA" | "CHEQUE";
  documentNumber: string;
  name: string;
  nationality: string;
  residenceCountry: string;
  originOfFunds: string;
  captureMode: "QR" | "MANUAL";
  proportionality: "PROPORCIONAL" | "NO_PROPORCIONAL";
  riskLevel: RiskLevel;
}

const INITIAL_STATE: BuyInFormState = {
  step: 1,
  amount: 2500,
  paymentMethod: "EFECTIVO",
  documentNumber: "8-712-2241",
  name: "Carlos Andres Nunez Pinilla",
  nationality: "Panameña",
  residenceCountry: "Panamá",
  originOfFunds: "Actividad comercial y disponibilidad de fondos declarada.",
  captureMode: "QR",
  proportionality: "PROPORCIONAL",
  riskLevel: "VERDE"
};

function useBuyInForm() {
  const [step, setStep] = useState(INITIAL_STATE.step);
  const [amount, setAmount] = useState(INITIAL_STATE.amount);
  const [paymentMethod, setPaymentMethod] = useState(INITIAL_STATE.paymentMethod);
  const [documentNumber, setDocumentNumber] = useState(INITIAL_STATE.documentNumber);
  const [name, setName] = useState(INITIAL_STATE.name);
  const [nationality, setNationality] = useState(INITIAL_STATE.nationality);
  const [residenceCountry, setResidenceCountry] = useState(INITIAL_STATE.residenceCountry);
  const [originOfFunds, setOriginOfFunds] = useState(INITIAL_STATE.originOfFunds);
  const [captureMode, setCaptureMode] = useState(INITIAL_STATE.captureMode);
  const [proportionality, setProportionality] = useState(INITIAL_STATE.proportionality);
  const [riskLevel, setRiskLevel] = useState(INITIAL_STATE.riskLevel);

  const reset = () => {
    setStep(INITIAL_STATE.step);
    setAmount(INITIAL_STATE.amount);
    setPaymentMethod(INITIAL_STATE.paymentMethod);
    setDocumentNumber(INITIAL_STATE.documentNumber);
    setName(INITIAL_STATE.name);
    setNationality(INITIAL_STATE.nationality);
    setResidenceCountry(INITIAL_STATE.residenceCountry);
    setOriginOfFunds(INITIAL_STATE.originOfFunds);
    setCaptureMode(INITIAL_STATE.captureMode);
    setProportionality(INITIAL_STATE.proportionality);
    setRiskLevel(INITIAL_STATE.riskLevel);
  };

  return {
    step, setStep,
    amount, setAmount,
    paymentMethod, setPaymentMethod,
    documentNumber, setDocumentNumber,
    name, setName,
    nationality, setNationality,
    residenceCountry, setResidenceCountry,
    originOfFunds, setOriginOfFunds,
    captureMode, setCaptureMode,
    proportionality, setProportionality,
    riskLevel, setRiskLevel,
    reset
  };
}

function Step1Content({
  amount, setAmount,
  paymentMethod, setPaymentMethod,
  captureMode, setCaptureMode,
  requiresKyc
}: {
  readonly amount: number;
  readonly setAmount: (v: number) => void;
  readonly paymentMethod: string;
  readonly setPaymentMethod: (v: "EFECTIVO" | "TARJETA" | "TRANSFERENCIA" | "CHEQUE") => void;
  readonly captureMode: "QR" | "MANUAL";
  readonly setCaptureMode: (v: "QR" | "MANUAL") => void;
  readonly requiresKyc: boolean;
}) {
  return (
    <div>
      <h4 className="modal__section-title">1. Umbral y canal operativo</h4>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="bi-amount">MONTO DE LA TRANSACCIÓN</label>
          <input className="form-input form-input--large" id="bi-amount" type="number" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bi-capture">CAPTURA DEL DOCUMENTO</label>
          <div className="radio-group">
            {(["QR", "MANUAL"] as const).map((mode) => (
              <label className="radio-option" key={mode}>
                <input checked={captureMode === mode} name="capture-mode" onChange={() => setCaptureMode(mode)} type="radio" />
                <span className="radio-option__label">{mode === "QR" ? "Escaneo QR" : "Entrada manual"}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="bi-payment">INSTRUMENTO DE PAGO</label>
        <div className="radio-group">
          {(["EFECTIVO", "TARJETA", "TRANSFERENCIA", "CHEQUE"] as const).map((method) => (
            <label className="radio-option" key={method}>
              <input checked={paymentMethod === method} name="buyin-method" onChange={() => setPaymentMethod(method)} type="radio" />
              <span className="radio-option__label">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {requiresKyc ? (
        <div className="kyc-warning">
          <strong className="text-gold">KYC ACTIVADO</strong>
          <p>Art. 27 Ley 23/2015 · Documento, nacionalidad, residencia y screening AML/PEP.</p>
        </div>
      ) : null}
    </div>
  );
}

function Step2Content({
  documentNumber, setDocumentNumber,
  nationality, setNationality,
  name, setName,
  residenceCountry, setResidenceCountry,
  proportionality, setProportionality,
  computedRisk,
  requiresRte,
  originOfFunds, setOriginOfFunds
}: {
  readonly documentNumber: string; readonly setDocumentNumber: (v: string) => void;
  readonly nationality: string; readonly setNationality: (v: string) => void;
  readonly name: string; readonly setName: (v: string) => void;
  readonly residenceCountry: string; readonly setResidenceCountry: (v: string) => void;
  readonly proportionality: string; readonly setProportionality: (v: "PROPORCIONAL" | "NO_PROPORCIONAL") => void;
  readonly computedRisk: string;
  readonly requiresRte: boolean;
  readonly originOfFunds: string; readonly setOriginOfFunds: (v: string) => void;
}) {
  return (
    <div>
      <h4 className="modal__section-title">2. Identificación del cliente</h4>
      <p className="form-hint">QR preferido. Si no es legible, se admite ingreso manual conforme al criterio del PDF.</p>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="bi-doc">CÉDULA / PASAPORTE</label>
          <input className="form-input" id="bi-doc" value={documentNumber} onChange={(event) => setDocumentNumber(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bi-nat">NACIONALIDAD</label>
          <input className="form-input" id="bi-nat" value={nationality} onChange={(event) => setNationality(event.target.value)} />
        </div>
      </div>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="bi-name">NOMBRE COMPLETO</label>
          <input className="form-input" id="bi-name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bi-res">PAÍS DE RESIDENCIA</label>
          <input className="form-input" id="bi-res" value={residenceCountry} onChange={(event) => setResidenceCountry(event.target.value)} />
        </div>
      </div>

      {computedRisk === "AMARILLO" ? (
        <div className="form-group">
          <label className="form-label" htmlFor="bi-prop">PROPORCIONALIDAD PEP / PERFIL ECONÓMICO</label>
          <div className="radio-group">
            {(["PROPORCIONAL", "NO_PROPORCIONAL"] as const).map((value) => (
              <label className="radio-option" key={value}>
                <input checked={proportionality === value} name="proportionality" onChange={() => setProportionality(value)} type="radio" />
                <span className="radio-option__label">{value === "PROPORCIONAL" ? "Proporcional" : "No proporcional"}</span>
              </label>
            ))}
          </div>
        </div>
      ) : null}

      {requiresRte || proportionality === "NO_PROPORCIONAL" ? (
        <div className="form-group">
          <label className="form-label" htmlFor="bi-funds">ORIGEN DE FONDOS / JUSTIFICACIÓN</label>
          <textarea className="form-input form-textarea" id="bi-funds" value={originOfFunds} onChange={(event) => setOriginOfFunds(event.target.value)} />
        </div>
      ) : null}

      <div className="screening-result">
        <h5>Screening AML/PEP</h5>
        <div className="screening-badges">
          <span className="badge badge--green">OFAC</span>
          <span className="badge badge--green">ONU</span>
          <span className="badge badge--green">UE</span>
          <span className="badge badge--green">PEP</span>
        </div>
        <div className="screening-summary">
          <RiskBadge risk={computedRisk as "VERDE" | "AMARILLO" | "ROJO"} />
          <p className="text-secondary">
            {computedRisk === "VERDE" && "Sin coincidencias. Puede avanzar."}
            {computedRisk === "AMARILLO" && "Caso PEP o riesgo geográfico. Requiere evaluación privada."}
            {computedRisk === "ROJO" && "Coincidencia AML. La transacción quedará bloqueada."}
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3Content({
  session,
  amount,
  captureMode,
  name,
  residenceCountry,
  riskLevel,
  requiresRte,
  proportionality
}: {
  readonly session: { readonly role?: string } | null;
  readonly amount: number;
  readonly captureMode: string;
  readonly name: string;
  readonly residenceCountry: string;
  readonly riskLevel: string;
  readonly requiresRte: boolean;
  readonly proportionality: string;
}) {
  return (
    <div>
      <h4 className="modal__section-title">3. Expediente y semáforo</h4>
      <div className="receipt">
        <div className="receipt__header">
          <div className="receipt__title text-gold">EXPEDIENTE DE BUY-IN</div>
          <div className="receipt__id">TX-{new Date().getFullYear()}-{Date.now().toString().slice(-5)}</div>
        </div>
        <div className="receipt__row">
          <span>Canal</span>
          <span>{session?.role === "Dealer" ? "Mesa" : "Caja"}</span>
        </div>
        <div className="receipt__row">
          <span>Monto</span>
          <span className="text-gold">{formatCurrency(amount)}</span>
        </div>
        <div className="receipt__row">
          <span>Documento</span>
          <span>{captureMode === "QR" ? "Escaneo QR" : "Entrada manual"}</span>
        </div>
        <div className="receipt__row">
          <span>Cliente</span>
          <span>{name}</span>
        </div>
        <div className="receipt__row">
          <span>Residencia</span>
          <span>{residenceCountry}</span>
        </div>
        <div className="modal-risk-line">
          <RiskBadge risk={riskLevel as "VERDE" | "AMARILLO" | "ROJO"} />
          {requiresRte ? <span className="badge badge--yellow">RTE requerido</span> : null}
          {proportionality === "NO_PROPORCIONAL" ? <span className="badge badge--yellow">Escalar PEP</span> : null}
        </div>
      </div>

      <div className="trace-panel">
        <strong>Trazabilidad</strong>
        <p>Hash+salt para documento, expediente inmutable y retención mínima de 5 años.</p>
      </div>
    </div>
  );
}

export function BuyInModal({
  isOpen,
  onClose,
  onSuccess
}: {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onSuccess: () => void;
}) {
  const submitTransaction = useAppStore((state) => state.submitTransaction);
  const session = useAppStore((state) => state.session);
  const form = useBuyInForm();

  const requiresKyc = form.amount >= 2000;
  const requiresRte = form.amount >= 10000 && form.paymentMethod === "EFECTIVO";

  const computedRisk = useMemo(() => {
    const upper = form.name.toUpperCase();
    const country = form.residenceCountry.toUpperCase();
    if (upper.includes("OFAC") || upper.includes("SANCIONADO")) return "ROJO" as const;
    if (upper.includes("PEP") || upper.includes("ALCALDE") || form.amount >= 8000 || country.includes("RIESGO")) return "AMARILLO" as const;
    return "VERDE" as const;
  }, [form.amount, form.name, form.residenceCountry]);

  const handleSubmit = async () => {
    if (form.step === 1) {
      form.setStep(requiresKyc ? 2 : 3);
      return;
    }

    if (form.step === 2) {
      form.setRiskLevel(computedRisk);
      form.setStep(3);
      return;
    }

    const result = await submitTransaction({
      type: "BUY_IN",
      clientDisplayName: form.name,
      documentNumber: form.documentNumber,
      amount: form.amount,
      paymentMethod: form.paymentMethod,
      originOfFunds: requiresRte || form.proportionality === "NO_PROPORCIONAL" ? form.originOfFunds : undefined,
      justification: form.proportionality === "NO_PROPORCIONAL" ? form.originOfFunds : undefined,
      nationality: form.nationality,
      residenceCountry: form.residenceCountry,
      sourceChannel: session?.role === "Dealer" ? "MESA" : "CAJA",
      documentCaptureMode: form.captureMode
    });
    form.setRiskLevel(result.level);
    onClose();
    form.reset();
    onSuccess();
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={() => {
        onClose();
        form.reset();
      }}
      title={session?.role === "Dealer" ? "Buy-in — Mesa de juego" : "Buy-in — Compra de fichas"}
      maxWidth={760}
      footer={
        <>
          <button
            className="btn btn--secondary"
            onClick={() => form.setStep((current: number) => Math.max(1, current - 1))}
            style={{ visibility: form.step === 1 ? "hidden" : "visible" }}
            type="button"
          >
            Volver
          </button>
          <button className="btn btn--ghost" onClick={onClose} type="button">
            Pausar y atender siguiente
          </button>
          <button className="btn btn--primary" onClick={handleSubmit} type="button">
            {form.step === 3 ? "Registrar expediente" : "Continuar"}
          </button>
        </>
      }
    >
      <p className="modal__intro">
        Menor a <strong>$2,000</strong>: sin KYC. Igual o mayor: escaneo de documento, screening AML/PEP y control de trazabilidad.
      </p>

      {form.step === 1 ? (
        <Step1Content
          amount={form.amount} setAmount={form.setAmount}
          paymentMethod={form.paymentMethod} setPaymentMethod={form.setPaymentMethod}
          captureMode={form.captureMode} setCaptureMode={form.setCaptureMode}
          requiresKyc={requiresKyc}
        />
      ) : null}

      {form.step === 2 ? (
        <Step2Content
          documentNumber={form.documentNumber} setDocumentNumber={form.setDocumentNumber}
          nationality={form.nationality} setNationality={form.setNationality}
          name={form.name} setName={form.setName}
          residenceCountry={form.residenceCountry} setResidenceCountry={form.setResidenceCountry}
          proportionality={form.proportionality} setProportionality={form.setProportionality}
          computedRisk={computedRisk}
          requiresRte={requiresRte}
          originOfFunds={form.originOfFunds} setOriginOfFunds={form.setOriginOfFunds}
        />
      ) : null}

      {form.step === 3 ? (
        <Step3Content
          session={session}
          amount={form.amount}
          captureMode={form.captureMode}
          name={form.name}
          residenceCountry={form.residenceCountry}
          riskLevel={form.riskLevel}
          requiresRte={requiresRte}
          proportionality={form.proportionality}
        />
      ) : null}
    </ModalShell>
  );
}

export function CashOutModal({ isOpen, onClose }: { readonly isOpen: boolean; readonly onClose: () => void }) {
  const submitTransaction = useAppStore((state) => state.submitTransaction);
  const [amount] = useState(3000);
  const [documentNumber, setDocumentNumber] = useState("8-902-1547");
  const [name, setName] = useState("Luis Fernando Espinosa Quintero");
  const [nationality, setNationality] = useState("Panameña");
  const [residenceCountry, setResidenceCountry] = useState("Panamá");
  const [chipsPlayedRatio, setChipsPlayedRatio] = useState(0.18);
  const [captureMode, setCaptureMode] = useState<"QR" | "MANUAL">("QR");
  const netAmount = Math.round(amount * 0.985);

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Cash-out — Canje de tickets"
      maxWidth={700}
      footer={
        <>
          <button className="btn btn--ghost" onClick={onClose} type="button">
            Cancelar
          </button>
          <button
            className="btn btn--primary"
            onClick={async () => {
              await submitTransaction({
                type: "CASH_OUT",
                clientDisplayName: name,
                documentNumber,
                amount,
                paymentMethod: "EFECTIVO",
                originOfFunds: "Canje validado contra tickets autenticados.",
                chipsPlayedRatio,
                nationality,
                residenceCountry,
                sourceChannel: "CAJA",
                documentCaptureMode: captureMode
              });
              onClose();
            }}
            type="button"
          >
            Confirmar — Entregar {formatCurrency(netAmount)}
          </button>
        </>
      }
    >
      <p className="modal__intro">
        Validación de autenticidad obligatoria antes de pagar. Si el total alcanza <strong>$2,000</strong>, se activa KYC.
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="co-tickets">TICKETS RECIBIDOS</label>
        <ul className="ticket-list" id="co-tickets">
          <li className="ticket-item">
            <span className="ticket-item__code">TKT-A47-2218</span>
            <span className="ticket-item__value">$1,800</span>
          </li>
          <li className="ticket-item">
            <span className="ticket-item__code">TKT-A47-2241</span>
            <span className="ticket-item__value">$950</span>
          </li>
          <li className="ticket-item">
            <span className="ticket-item__code">TKT-A47-2253</span>
            <span className="ticket-item__value">$250</span>
          </li>
        </ul>
      </div>

      <div className="receipt mb-lg">
        <div className="receipt__row">
          <span>Subtotal</span>
          <span className="font-mono">{formatCurrency(amount)}</span>
        </div>
        <div className="receipt__row">
          <span>Comisión (1.5%)</span>
          <span className="font-mono">-{formatCurrency(Math.round(amount * 0.015))}</span>
        </div>
        <div className="receipt__row receipt__row--total">
          <strong>Neto a entregar</strong>
          <strong className="text-gold">{formatCurrency(netAmount)}</strong>
        </div>
      </div>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="co-doc">IDENTIFICACIÓN</label>
          <input className="form-input" id="co-doc" value={documentNumber} onChange={(event) => setDocumentNumber(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="co-capture">CAPTURA</label>
          <div className="radio-group">
            {(["QR", "MANUAL"] as const).map((mode) => (
              <label className="radio-option" key={mode}>
                <input checked={captureMode === mode} name="cashout-capture" onChange={() => setCaptureMode(mode)} type="radio" />
                <span className="radio-option__label">{mode}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="co-name">CLIENTE</label>
          <input className="form-input" id="co-name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="co-ratio">RATIO FICHAS APOSTADAS</label>
          <input className="form-input" id="co-ratio" max="1" min="0" step="0.01" type="number" value={chipsPlayedRatio} onChange={(event) => setChipsPlayedRatio(Number(event.target.value))} />
        </div>
      </div>

      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="co-nat">NACIONALIDAD</label>
          <input className="form-input" id="co-nat" value={nationality} onChange={(event) => setNationality(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="co-res">PAÍS DE RESIDENCIA</label>
          <input className="form-input" id="co-res" value={residenceCountry} onChange={(event) => setResidenceCountry(event.target.value)} />
        </div>
      </div>

      <div className="screening-result">
        <h5>Verificaciones</h5>
        <ul className="verification-list">
          <li>Tickets autenticados antes del pago.</li>
          <li>KYC obligatorio desde $2,000.</li>
          <li>Si el jugador apostó menos del 20%, se genera alerta automática al oficial.</li>
        </ul>
      </div>
    </ModalShell>
  );
}

export function ManualAlertModal({ isOpen, onClose }: { readonly isOpen: boolean; readonly onClose: () => void }) {
  const createManualAlert = useAppStore((state) => state.createManualAlert);
  const session = useAppStore((state) => state.session);
  const [title, setTitle] = useState("Comportamiento sospechoso en sala");
  const [description, setDescription] = useState(
    "Jugador cambia su patron de juego, evita interacción y solicita dispersar operaciones entre mesa y caja."
  );
  const [clientHash, setClientHash] = useState("b88e...2741");
  const [amount, setAmount] = useState(1800);

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Alerta discreta"
      maxWidth={620}
      footer={
        <>
          <button className="btn btn--ghost" onClick={onClose} type="button">
            Cancelar
          </button>
          <button
            className="btn btn--primary"
            onClick={async () => {
              await createManualAlert({ title, description, clientHash, amount });
              onClose();
            }}
            type="button"
          >
            Registrar sin alertar al cliente
          </button>
        </>
      }
    >
      <p className="modal__intro">
        {session?.role === "Supervisor" ? "Escala el caso al oficial" : "Deja constancia interna"} sin interrumpir la operación en
        sala.
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="ma-title">MOTIVO</label>
        <input className="form-input" id="ma-title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div className="grid grid--2col mb-lg">
        <div className="form-group">
          <label className="form-label" htmlFor="ma-hash">HASH DEL CLIENTE</label>
          <input className="form-input" id="ma-hash" value={clientHash} onChange={(event) => setClientHash(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="ma-amount">MONTO REFERENCIAL</label>
          <input className="form-input" id="ma-amount" type="number" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="ma-desc">DETALLE INTERNO</label>
        <textarea className="form-input form-textarea" id="ma-desc" value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
    </ModalShell>
  );
}

export function ReceiptModal({ isOpen, onClose }: { readonly isOpen: boolean; readonly onClose: () => void }) {
  const session = useAppStore((state) => state.session);

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} title="Comprobante" maxWidth={420}>
      <div className="receipt">
        <div className="receipt__header">
          <div className="receipt__title text-gold">CASINODESK · EXPEDIENTE AML</div>
          <div className="receipt__id">EXP-{new Date().getFullYear()}-{Date.now().toString().slice(-6)}</div>
        </div>
        <div className="receipt__row">
          <span>Estación</span>
          <span>{session?.station} · {session?.initials}</span>
        </div>
        <div className="receipt__row">
          <span>Cliente</span>
          <span>Registro completado</span>
        </div>
        <div className="receipt__row">
          <span>Semáforo</span>
          <span className="badge badge--green">VERDE</span>
        </div>
        <div className="receipt__row receipt__row--total">
          <strong>ESTADO</strong>
          <strong className="text-gold">Expediente generado</strong>
        </div>
        <div className="receipt__footer">Trazabilidad obligatoria por 5 años conforme a la Ley 23/2015.</div>
      </div>
    </ModalShell>
  );
}
