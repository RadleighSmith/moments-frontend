import { rest } from "msw"

const baseURL = 'https://moments-drf-api-rs-34ce7500817a.herokuapp.com/'


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                    "pk": 5,
                    "username": "Rad",
                    "email": "",
                    "first_name": "",
                    "last_name": "",
                    "profile_id": 5,
                    "profile_image": "https://res.cloudinary.com/dn6vitvd4/image/upload/v1/media/images/IMG_2820_qdshdm",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout.`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];