import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {
    const token = jwt.sign(payload,"chayanne" , {expiresIn:'2d'})
    return token;
}