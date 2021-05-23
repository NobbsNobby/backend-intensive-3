import faker from 'faker';
import {users, classes} from '../../odm';

export const createUsers = (count = 10) => {
    const usersArray = [];
    for (let i = 0; i < count; i++) {
        const userObj = {
            name: {
                first: faker.name.firstName(),
                last:  faker.name.lastName(),
            },
            phones: [
                {
                    phone:   faker.phone.phoneNumber('+###(##)###-##-##'),
                    primary: true,
                },
            ],
            emails: [
                {
                    email:   faker.internet.email(),
                    primary: true,
                },
            ],
            password: faker.internet.password(),
            sex:      'm',
            roles:    [ 'user' ],
            social:   {
                facebook: '',
                linkedin: '',
                github:   '',
                skype:    '',
            },
            notes:    '',
            disabled: false,
        };

        usersArray.push(userObj);
    }

    return usersArray;
};

users.collection.drop({}, () => {
    users.create(createUsers(20));
});
