/**
 * Проверка авторизации пользователя.
 *
 * @param state
 * @returns {boolean}
 */
export const isAuth = state => (state.auth.user !== null || false);

export const user = state => (state.auth.user || null);
export const token = state => (state.auth.token || null);
export const domains = state => (state.auth.domains || []);
