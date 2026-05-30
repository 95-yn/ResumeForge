/**
 * 子路径部署助手（如部署在 https://www.yyyyn.cn/resume）。
 *
 * Next 自己管理的 URL（<Link>、router.push/prefetch、next/image、_next/static）会自动加 basePath 前缀，
 * 无需处理。但「硬编码的 public 资源路径」和「window.open 这类原生 API」不会自动加前缀，必须套 asset()。
 *
 * basePath 由构建时环境变量 BASE_PATH 决定（见 next.config.mjs），通过 NEXT_PUBLIC_BASE_PATH 暴露给前端。
 * 本地 dev 不设该变量时为空串，即根路径，行为不变。
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** 给一个以 / 开头的 public 资源 / 路由路径加上 basePath 前缀。 */
export const asset = (path: string) => `${BASE_PATH}${path}`;
