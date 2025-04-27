const FooterLayout = () => {
  return (
    <div className="text-center justify-center gap-1 text-[16px] flex flex-col md:flex-row sm:text-[19px] my-3 text-[var(--foreground)]">
      <span>Copyright © {new Date().getFullYear()} nguyenhungdev. Made with</span>
      <span className="text-[var(--text-main)] font-medium">Lê Nguyên Hùng</span>
    </div>
  )
}

export default FooterLayout
