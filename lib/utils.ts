export const validateString = (value: unknown) => {
    if (!value || typeof value !== 'string') {
        return false
    }
    return true
}

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error){
        return error.message
        
    } else if (error && typeof error === 'object' && 'message' in error){
        return error.message 
    }
}