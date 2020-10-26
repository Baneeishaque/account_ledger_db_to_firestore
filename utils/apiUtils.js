function getServerApiForGetInHttpApiFolder(hostAddress, httpApiFolder, methodName, fieExtension) {

    return `${hostAddress}/${httpApiFolder}/${methodName}.${fieExtension}`
}

function getServerApiForGetInHttpApiFolderForPhp(hostAddress, httpApiFolder, methodName) {

    return getServerApiForGetInHttpApiFolder(hostAddress, httpApiFolder, methodName, 'php')
}

module.exports = {getServerApiForGetInHttpApiFolderForPhp}
