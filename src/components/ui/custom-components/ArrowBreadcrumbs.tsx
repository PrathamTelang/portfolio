"use client"

type BreadcrumbItem = {
  label: string
  href?: string
  active?: boolean
}

interface ArrowBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function ArrowBreadcrumbs({ items }: ArrowBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm cursor-pointer">
      <style jsx>{`
        .arrow {
          clip-path: polygon(
            0 0,
            92% 0,
            100% 50%,
            92% 100%,
            0 100%,
            8% 50%
          );
        }
      `}</style>

      <ol className="flex items-center">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1

          return (
            <li
              key={idx}
              className={[
                "arrow px-6 py-2 -ml-3 first:ml-0",
                "transition-colors duration-200",
                item.active || isLast
                  ? "bg-black text-white dark:bg-white dark:text-black z-30"
                  : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
              ].join(" ")}
              style={{ zIndex: item.active || isLast ? 20 : 10 }}
            >
              {item.href && !isLast ? (
                <a href={item.href} className="block">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
