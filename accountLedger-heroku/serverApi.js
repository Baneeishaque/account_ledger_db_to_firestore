const apiUtils = require('../utils/apiUtils')
const httpUtils = require('../utils/httpUtils')

function apiWrapperForGetServerApiForGetInHttpApiFolderForPhp(methodName) {

    return apiUtils.getServerApiForGetInHttpApiFolderForPhp('https://account-ledger-server.herokuapp.com', 'http_API', methodName)
}

function getUsers(onData, onError) {

    httpUtils.performGet(apiWrapperForGetServerApiForGetInHttpApiFolderForPhp('getUsers'), onData, onError)
}

function getAccounts(onData, onError) {

    httpUtils.performGet(apiWrapperForGetServerApiForGetInHttpApiFolderForPhp('getAccounts'), onData, onError)
}

function getTransactions(onData, onError) {

    httpUtils.performGet(apiWrapperForGetServerApiForGetInHttpApiFolderForPhp('getTransactions'), onData, onError)
}

function getTransactionsV2(onData, onError) {

    httpUtils.performGet(apiWrapperForGetServerApiForGetInHttpApiFolderForPhp('getTransactionsV2'), onData, onError)
}

function getConfiguration(onData, onError) {

    httpUtils.performGet(apiWrapperForGetServerApiForGetInHttpApiFolderForPhp('getConfiguration'), onData, onError)
}

module.exports = {getUsers, getAccounts, getTransactions, getTransactionsV2, getConfiguration}
