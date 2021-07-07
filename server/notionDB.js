const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

// Init Client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const block_id = process.env.NOTION_DATABASE_ID;

const getData = async () => {
    const { results: blocks } = await notion.blocks.children.list({
        block_id,
    });

    // get the data
    const isLive = blocks[0].to_do.checked;
    const videoID = blocks[1].paragraph.text[0].plain_text.split(" ")[1];
    const incomeDB_id = blocks[2].id;

    const payload = {
        path: `databases/${incomeDB_id}/query`,
        method: "POST",
    };

    const { results } = await notion.request(payload);

    const incomes = results.map((page) => ({
        value: +page.properties.Value.title[0].plain_text,
        resources: page.properties.Resource.multi_select
            .map((tag) => tag.name)
            .join(", "),
        date: page.properties.Date.date.start,
    }));

    return {
        isLive,
        videoID,
        incomes,
    };
};

export { getData };
