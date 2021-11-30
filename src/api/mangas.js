/* eslint-disable object-curly-newline */
import { createRequest, errorHandler, successHandler } from './api';

const ws = createRequest();

export function getMangas(id) {
  let url = 'Mangas';
  if (id) url += `/${id}`;
  return ws.get(url).then(successHandler).catch(errorHandler);
}

export function editManga(id, createdAt, name, price, description, stock, image) {
  const params = { createdAt, name, price, description, stock, image };
  return ws
    .put(`Mangas/${id}`, params, { headers: { 'Content-Type': 'application/json' } })
    .then(successHandler)
    .catch(errorHandler);
}

export function addManga(createdAt, name, price, description, stock, image) {
  const params = { createdAt, name, price, description, stock, image };
  return ws.post('Mangas', params).then(successHandler).catch(errorHandler);
}

export function deleteManga(id) {
  return ws.delete(`Mangas/${id}`).then(successHandler).catch(errorHandler);
}
