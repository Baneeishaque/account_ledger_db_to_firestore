const serverDatabase = require('./accountLedger-heroku/serverApi')
const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('./account-ledger-8c36cc479306.json');

firebaseAdmin.initializeApp({

    credential: firebaseAdmin.credential.cert(serviceAccount)
});

const fireStoreDatabase = firebaseAdmin.firestore();

serverDatabase.getUsers(function (responseData) {

    // console.log('Response is : ' + responseData)

    const apiResponse = JSON.parse(responseData)
    if (apiResponse[0].status === 1) {

        console.log('No Users...')

    } else {

        console.log('Heroku Account Ledger Users...')
        const fireStoreDatabaseUsers = fireStoreDatabase.collection('users')

        for (let i = 1; i < apiResponse.length; i++) {

            let user = apiResponse[i]

            // {
            //     "id": "101",
            //     "username": "test_user",
            //     "password": "test_user"
            // }

            console.log(user.id + ', ' + user.username + ', ' + user.password);

            writeToFireStoreDocument(fireStoreDatabaseUsers.doc(user.id),
                {

                    username: user.username,
                    password: user.password

                }).then(() => {
            })
        }

        console.log('\nFirestore Account Ledger Users...')
        fireStoreDatabaseUsers.get()
            .then(snapshot => {
                snapshot.forEach(user => {

                    console.log(user.id + ' => ', user.data());
                });
            })
            .catch(error => {

                console.log('Error : ' + error)
            });
    }

}, function (responseError) {

    console.log('Error : ' + responseError)
});

serverDatabase.getAccounts(function (responseData) {

    // console.log('Response is : ' + responseData)

    const apiResponse = JSON.parse(responseData)
    if (apiResponse[0].status === 1) {

        console.log('No Accounts...')

    } else {

        console.log('Heroku Account Ledger Accounts...')
        const fireStoreDatabaseUserAccounts = fireStoreDatabase.collection('accounts')

        for (let i = 1; i < apiResponse.length; i++) {

            let account = apiResponse[i]

            // {
            //     "account_id": "1",
            //     "full_name": "Assets",
            //     "name": "Assets",
            //     "parent_account_id": "0",
            //     "account_type": "ASSET",
            //     "notes": null,
            //     "commodity_type": "CURRENCY",
            //     "commodity_value": "INR",
            //     "owner_id": "0",
            //     "taxable": "F",
            //     "place_holder": "T",
            //     "insertion_date_time": null
            // }

            console.log(account.account_id + ', ' + account.full_name + ', ' + account.name + ', ' + account.parent_account_id + ', ' + account.account_type + ', ' + account.notes + ', ' + account.commodity_type + ', ' + account.commodity_value + ', ' + account.owner_id + ', ' + account.taxable + ', ' + account.place_holder + ', ' + account.insertion_date_time);


            writeToFireStoreDocument(fireStoreDatabaseUserAccounts.doc(account.account_id),
                {

                    full_name: account.full_name,
                    name: account.name,
                    parent_account_id: account.parent_account_id,
                    account_type: account.account_type,
                    notes: account.notes,
                    commodity_type: account.commodity_type,
                    commodity_value: account.commodity_value,
                    owner_id: account.owner_id,
                    taxable: account.taxable,
                    place_holder: account.place_holder,
                    insertion_date_time: account.insertion_date_time

                }).then(() => {
            })
        }

        console.log('\nFirestore Account Ledger Accounts...')
        fireStoreDatabaseUserAccounts.get()
            .then(snapshot => {
                snapshot.forEach(account => {

                    console.log(account.id + ' => ', account.data());
                });
            })
            .catch(error => {

                console.log('Error : ' + error)
            });
    }

}, function (responseError) {

    console.log('Error : ' + responseError)
});

serverDatabase.getTransactionsV2(function (responseData) {

    // console.log('Response is : ' + responseData)

    const apiResponse = JSON.parse(responseData)
    if (apiResponse[0].status === 1) {

        console.log('No Transactions...')

    } else {

        console.log('Heroku Account Ledger TransactionsV2...')
        const fireStoreDatabaseTransactionsV2 = fireStoreDatabase.collection('transactionsv2')

        for (let i = 1; i < apiResponse.length; i++) {

            let transactionV2 = apiResponse[i]

            // {
            //     "id": "22461",
            //     "event_date_time": "2020-08-15 09:10:00",
            //     "particulars": "cashback",
            //     "amount": "7",
            //     "insertion_date_time": "2020-10-06 23:23:34",
            //     "inserter_id": "13",
            //     "from_account_id": "3771",
            //     "to_account_id": "3781"
            // }

            console.log(transactionV2.id + ', ' + transactionV2.event_date_time + ', ' + transactionV2.particulars + ', ' + transactionV2.amount + ', ' + transactionV2.insertion_date_time + ', ' + transactionV2.inserter_id + ', ' + transactionV2.from_account_id + ', ' + transactionV2.to_account_id);

            writeToFireStoreDocument(fireStoreDatabaseTransactionsV2.doc(transactionV2.id),
                {

                    event_date_time: transactionV2.event_date_time,
                    particulars: transactionV2.particulars,
                    amount: transactionV2.amount,
                    insertion_date_time: transactionV2.insertion_date_time,
                    inserter_id: transactionV2.inserter_id,
                    from_account_id: transactionV2.from_account_id,
                    to_account_id: transactionV2.to_account_id

                }).then(() => {
            })
        }

        console.log('\nFirestore Account Ledger TransactionsV2...')
        fireStoreDatabaseTransactionsV2.get()
            .then(snapshot => {
                snapshot.forEach(transactionV2 => {

                    console.log(transactionV2.id + ' => ', transactionV2.data());
                });
            })
            .catch(error => {

                console.log('Error : ' + error)
            });
    }

}, function (responseError) {

    console.log('Error : ' + responseError)
});

serverDatabase.getTransactions(function (responseData) {

    // console.log('Response is : ' + responseData)

    const apiResponse = JSON.parse(responseData)
    if (apiResponse[0].status === 1) {

        console.log('No Transactions...')

    } else {

        console.log('Heroku Account Ledger Transactions...')
        const fireStoreDatabaseTransactions = fireStoreDatabase.collection('transactions')

        for (let i = 1; i < apiResponse.length; i++) {

            let transaction = apiResponse[i]

            // {
            //     "id": "146",
            //     "event_date_time": "2018-05-18 17:36:35",
            //     "particulars": "Credit : from sharafudheen VALPARAMBIL jaram",
            //     "amount": "300",
            //     "insertion_date_time": "2018-05-18 23:38:43",
            //     "inserter_id": "2"
            // }

            console.log(transaction.id + ', ' + transaction.event_date_time + ', ' + transaction.particulars + ', ' + transaction.amount + ', ' + transaction.insertion_date_time + ', ' + transaction.inserter_id);

            writeToFireStoreDocument(fireStoreDatabaseTransactions.doc(transaction.id),
                {

                    event_date_time: transaction.event_date_time,
                    particulars: transaction.particulars,
                    amount: transaction.amount,
                    insertion_date_time: transaction.insertion_date_time,
                    inserter_id: transaction.inserter_id

                }).then(() => {
            })
        }

        console.log('\nFirestore Account Ledger Transactions...')
        fireStoreDatabaseTransactions.get()
            .then(snapshot => {
                snapshot.forEach(transaction => {

                    console.log(transaction.id + ' => ', transaction.data());
                });
            })
            .catch(error => {

                console.log('Error : ' + error)
            });
    }

}, function (responseError) {

    console.log('Error : ' + responseError)
});

serverDatabase.getConfiguration(function (responseData) {

    // console.log('Response is : ' + responseData)

    const apiResponse = JSON.parse(responseData)
    if (apiResponse[0].status === 1) {

        console.log('No Configuration...')

    } else {

        console.log('Heroku Account Ledger Configuration...')
        const fireStoreDatabaseConfiguration = fireStoreDatabase.collection('configuration')

        for (let i = 1; i < apiResponse.length; i++) {

            let configuration = apiResponse[i]

            // {
            //     "id": "1",
            //     "version_code": "1",
            //     "version_name": "1",
            //     "system_status": "1"
            // }

            console.log(configuration.id + ', ' + configuration.version_code + ', ' + configuration.version_name + ', ' + configuration.system_status);

            writeToFireStoreDocument(fireStoreDatabaseConfiguration.doc(configuration.id),
                {

                    version_code: configuration.version_code,
                    version_name: configuration.version_name,
                    system_status: configuration.system_status

                }).then(() => {
            })
        }

        console.log('\nFirestore Account Ledger Configuration...')
        fireStoreDatabaseConfiguration.get()
            .then(snapshot => {
                snapshot.forEach(configuration => {

                    console.log(configuration.id + ' => ', configuration.data());
                });
            })
            .catch(error => {

                console.log('Error : ' + error)
            });
    }

}, function (responseError) {

    console.log('Error : ' + responseError)
});

async function writeToFireStoreDocument(docRef, data) {

    await docRef.set(data);
}
