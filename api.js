(function () {
    const configuredBase = window.SCAN_CHECK_API_BASE;
    if (typeof configuredBase === 'string' && configuredBase.trim()) {
        window.scanCheckApiBase = configuredBase.trim().replace(/\/+$/, '');
    } else if (window.location.protocol === 'file:' ||
        !window.location.hostname ||
        window.location.hostname === '0.0.0.0' ||
        window.location.hostname === '::') {
        window.scanCheckApiBase = 'http://127.0.0.1:5000';
    } else if (!window.location.port || window.location.port === '5000') {
        window.scanCheckApiBase = window.location.origin;
    } else {
        window.scanCheckApiBase = `${window.location.protocol}//${window.location.hostname}:5000`;
    }

    window.scanCheckApiUrl = function (path) {
        return `${window.scanCheckApiBase}/${String(path).replace(/^\/+/, '')}`;
    };
})();
