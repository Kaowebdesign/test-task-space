const parsers = {
    onlyUACharts: (value: string) => value,
    onlyNumber: (value: string) => value,
    phone: (format: string) => (value: string) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");

        if (format === 'UA') {
            if (onlyNums.length <= 3) return onlyNums;
            return `+ 38(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)} ${onlyNums.slice(6, 8)} ${onlyNums.slice(8, 10)}`;
        }

        return value
    }
}

export { parsers }
