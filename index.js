const puppeteer = require("puppeteer")

const SELECTOR = 'li.col-xs-6:nth-child(1) > article:nth-child(1) > div:nth-child(1) > a:nth-child(1)'

const getData = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("http://books.toscrape.com/")

  await page.click(SELECTOR)

  const result = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText
    let price = document.querySelector(".price_color").innerText

    return { title, price }
  })

  browser.close()
  return result
}

getData().then(value => {
  console.log(value)
})

