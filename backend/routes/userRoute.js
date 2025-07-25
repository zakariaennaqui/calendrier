import express from 'express';
import { 
    registerUser, 
    loginUser, 
    getProfile, 
    updateProfile, 
    bookAppointment, 
    listAppointment, 
    cancelAppointment, 
    paymentRazorpay, 
    verifyRazorpay, 
    paymentStripe, 
    verifyStripe, 
    paymentPayzone, 
    verifyPayzone,
    calendarPaymentRazorpay,
    verifyCalendarRazorpay,
    calendarPaymentStripe,
    verifyCalendarStripe,
    calendarPaymentPayzone,
    verifyCalendarPayzone
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment-razorpay', authUser, paymentRazorpay)
userRouter.post('/verifyRazorpay', authUser, verifyRazorpay)
userRouter.post('/payment-stripe', authUser, paymentStripe)
userRouter.post('/verifyStripe', authUser, verifyStripe)
userRouter.post('/payment-payzone', authUser, paymentPayzone);
userRouter.post('/verifyPayzone', authUser, verifyPayzone);

// Calendar payment routes
userRouter.post('/calendar-payment-razorpay', authUser, calendarPaymentRazorpay);
userRouter.post('/verifyCalendarRazorpay', authUser, verifyCalendarRazorpay);
userRouter.post('/calendar-payment-stripe', authUser, calendarPaymentStripe);
userRouter.post('/verifyCalendarStripe', authUser, verifyCalendarStripe);
userRouter.post('/calendar-payment-payzone', authUser, calendarPaymentPayzone);
userRouter.post('/verifyCalendarPayzone', authUser, verifyCalendarPayzone);

export default userRouter;