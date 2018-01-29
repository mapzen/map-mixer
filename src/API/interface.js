/**
 * Mocking client-server processing
 */
import _products from './mapzen-maps.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT)
}