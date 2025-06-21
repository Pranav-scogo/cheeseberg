export function ImpactResults() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-purple-50/20 dark:from-muted/30 dark:via-background dark:to-purple-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/20 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-amber-200/35 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}