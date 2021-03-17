import { addGoatFacts } from '../addGoatFacts'

test('Check if the addGoatFacts function exists',() => {
    expect(addGoatFacts).toBeDefined()
})

test('Check if facts are being added to the dom',() => {
    let facts = ["Hey there","How are you"]

    document.body.innerHTML = `
    <ul class="list-group" id="goat-facts-list">
    </ul>
    `;
    let items = document.getElementsByClassName('list-item');
    expect(items.length).toBe(0)
    addGoatFacts(facts)
    items = document.getElementsByClassName('list-item');
    expect(items.length).toBe(2)
})