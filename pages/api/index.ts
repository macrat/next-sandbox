export default (req, res) => {
    res.status(200).json({
        pages: [
            'hello',
            'world',
        ],
    });
};
