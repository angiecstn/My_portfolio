describe 'Index Page', type: :feature do

    it 'displays project list' do
        visit '/'
        expect(page).to have_css '.projects'
        

        within '.projects' do
          expect(page).to have_content 'My First Website in HTML'
          expect(page).to have_content 'FizzBuzz'
          expect(page).to have_content 'My First Website in React'
          expect(page).to have_content 'Address Book'
        end
    end
end

    it 'renders navbar partial' do
    expect(page).to have_selector 'navbar'
    within 'navbar' do
        expect(page).to have_content
    end
end

