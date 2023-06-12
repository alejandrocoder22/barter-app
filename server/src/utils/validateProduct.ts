export const validateProduct = (body: any, res: any, req: any) => {
  const { productName, estimatedValue, status, category, location, description } = body
  if (!productName || !estimatedValue || !status || !category || !description || !location || !req.file) {
    res.status(400)
    throw new Error('All fields are required')
  }

  if (isNaN(estimatedValue)) {
    res.status(400)
    throw new Error('Estimated value must be a number')
  }
}
