export const getDatabase = () => {
    const { DB } = process.env;

    return DB;
};
