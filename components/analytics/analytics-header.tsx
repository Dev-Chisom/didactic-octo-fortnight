export default function AnalyticsHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Track your team's performance and project progress
        </p>
      </div>
      <div className="flex items-center gap-3">
        <select className="rounded-md border px-3 py-2 text-sm">
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="3months">Last 3 Months</option>
          <option value="year">This Year</option>
        </select>
      </div>
    </div>
  );
}