export default function PageFrame() {
  return (
    <>
      <div className="page-frame" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true">
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>
    </>
  )
}
