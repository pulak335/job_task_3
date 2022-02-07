// ManagingCampaigns
// 6FROm2y5Oc6zBADi
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require("cors");
const fileUpload = require('express-fileupload');

const objectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express();
// MiddleWare
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zpk1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//console.log(uri) // for checking user/pass is alright

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("campaignCollection");
        const campaignList = database.collection("campaignList");
        //GET API ALL CAMPAIGNS

        app.get('/campaignList', async (req, res) => {
            const cursor = campaignList.find({});
            const campaign = await cursor.toArray();
            res.send(campaign)
        })
        // GET API CAMPAIGNS
        app.get('/campaignList/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const campaign = await campaignList.findOne(query);
            res.json(campaign);
        })
        app.post('/campaignList', async (req, res) => {
            const name = req.body.name;
            const totalBudget = req.body.totalBudget;
            const dailyBudget = req.body.dailyBudget;
            const startDate = req.body.startDate;
            const endDate = req.body.endDate;
            const pic = req.files.image;
            const picData = pic.data;
            const encodedPic = picData.toString('base64');
            const imageBuffer = Buffer.from(encodedPic, 'base64');
            const campaign = {
                name,
                totalBudget,
                dailyBudget,
                startDate,
                endDate,
                image: imageBuffer
            }
            const result = await campaignList.insertOne(campaign);
            res.json(result);
        })

        // Update TotalBudget
        app.put("/updateCampaign/:id", (req, res) => {
            const id = req.params.id;
            console.log(id)


            const filter = { _id: objectId(id) };


            const campaign = req.body.totalBudget

            campaignList
                .updateMany(filter, {
                    $set: { totalBudget: campaign },
                })
                .then((result) => {
                    res.json(result);
                });
        });

    } finally {
        //await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})