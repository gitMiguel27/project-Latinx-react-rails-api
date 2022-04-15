
puts '🌱 Seeding Artists...'

a1 = Artist.create( name:'Álvaro Suárez Vértiz', hometown: '', nationality: '', birth: 1949, death: 0, biography: 'The artist Álvaro Suárez Vértiz was born in the district of Chosica, Lima-Peru. He is the son of Germán Suárez Vértiz and María Teresa Reyes Carrillo, both founders of the “Taller Suárez Vértiz” in the Miraflores district of the Peruvian capital. His full name is Álvaro Darío Félix María Suarez Reyes. It is at the request of his father Germán Suárez Vértiz that he bears his first name followed by the two paternal surnames as his stage name.' , life_mission: 'To represent Don Quixote and In each performance I pay homage to such an outstanding literary figure of Cervantes. Which has been the most printed and reproduced book in the history of mankind', country_id: peru.id)
a2 = Artist.create( name:'Fernando de Szyszlo', hometown: '', nationality: '', birth: , death:, biography: '' , life_mission: '', country_id: peru.id)
a3 = Artist.create( name:'Pablo Cesar Amaringo', hometown: '', nationality: '', birth: , death:, biography: '' , life_mission: '', country_id: peru.id)
a4 = Artist.create( name:'Victor Delfin', hometown: '', nationality: '', birth: , death:, biography: , life_mission: '', country_id: peru.id)
a5 = Artist.create( name:'Grimanesa Amorós', hometown: 'Lima, Peru', nationality: 'Peruvian', birth: 1962, death: 0, biography: 'Grimanesa Amorós is an interdisciplinary artist whose interests in the fields of social history, scientific research, and critical theory have greatly influenced her work. She often uses sculpture, video, lighting and sound to create works that illuminate our notions of personal identity and community. ' , life_mission: 'Amoros utilizes her art as an agent for empowerment to involve viewers from all different backgrounds and communities.', country_id: peru.id)

puts '🌱 Seeding Users...'

rodney = User.create(name: 'Rodney Payamps', country_of_origin: 'U.S.A', nationality: 'Dominican', age: 25 , life_mission: 'to eat platanos', country_id: dominican.id )
miguel = User.create(name: 'Miguel Nazario', country_of_origin: 'U.S.A', nationality: 'Peruvian', age: 22 , life_mission: 'to represent queer latinx artists', country_id: peru.id )
# u3 = User.create(name: '', country_of_origin: '', nationality: '', age: , life_mission: '')
# u4 = User.create(name: '', country_of_origin: '', nationality: '', age: , life_mission: '')
# u5 = User.create(name: '', country_of_origin: '', nationality: '', age: , life_mission: '')

puts '🌱 Seeding Artworks...'

aw1 = Artwork.create(title: '', image: '', category: '', date: , current_lcation: '', artist_id: 1, country_id: , user_id: )
aw2 = Artwork.create(title: '', image: '', category: '', date: , current_lcation: '', artist_id: 1, country_id: , user_id: )
aw3 = Artwork.create(title: '', image: '', category: '', date: , current_lcation: '', artist_id: 1 , country_id: , user_id: )
aw4 = Artwork.create(title: '', image: '', category: '', date: , current_lcation: '', artist_id: 1, country_id: , user_id: )
aw5 = Artwork.create(title: '', image: '', category: '', date: , current_lcation: '', artist_id: 1, country_id: , user_id: )

puts '🌱 Seeding Countries...'

peru = Country.create(name: 'Peru')
c2 = Country.create(name: '')
c3 = Country.create(name: '')
c4 = Country.create(name: '')
dominican = Country.create(name: 'Dominican Republic')

puts '✅ Done seeding'