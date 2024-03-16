import React, { useState } from 'react';
import { Button, Card, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { acceptTerms } from '../../redux/authSlice/authSlice';

function TermsDialog() {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleClickCheckbox = e => {
        setChecked(e.target.checked);
    };

    const handleSubmitForm = () => {
        dispatch(acceptTerms());
    };

    return (
        <Card variant="elevation" style={{ padding: 16 }}>
            <Typography variant="h3">Terms And Conditions</Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni itaque veniam error
                eveniet, iste quia odio deserunt reprehenderit facere magnam quod illum voluptatum.
                Cupiditate iusto veritatis, error quisquam iure sunt. Laboriosam eaque excepturi
                temporibus soluta voluptates magni, accusamus reiciendis molestiae iste repellat
                quam corrupti, facilis expedita, quaerat totam! Placeat, voluptate? Culpa vitae
                aliquid quibusdam doloremque fugit numquam laborum dolore quod aut ut similique,
                nesciunt autem explicabo, magni blanditiis voluptatibus rerum ipsa magnam quaerat!
                Commodi voluptate itaque similique quae temporibus omnis nihil reiciendis, at
                facilis quos incidunt quas totam maiores culpa, necessitatibus voluptatem explicabo.
                Quos maiores repudiandae exercitationem nostrum iusto quis excepturi fugit sunt? Ut
                quo corrupti, velit dolorum, officia, asperiores minus vero adipisci nihil aliquam
                sapiente soluta nemo a voluptatum. Provident, aspernatur, excepturi atque fugit a
                delectus possimus incidunt impedit magnam eos ipsa eaque et fugiat rem accusantium
                sapiente eum aut, voluptas nobis aliquam eligendi veritatis iure aliquid tempora.
                Animi nostrum enim, dolores ut sed excepturi? Quisquam voluptatum accusamus facilis
                vitae molestias odio quod ad repudiandae exercitationem ab perspiciatis earum
                laboriosam maxime labore, praesentium omnis consequatur voluptate itaque eius
                aliquid, vero doloribus. Atque vitae repudiandae sequi, molestias mollitia est, quod
                aspernatur molestiae dolorem nihil accusantium ipsum provident nesciunt! Explicabo
                unde et ex, dolor odio quam sapiente tempora. Deleniti ex saepe modi nostrum! Beatae
                voluptas soluta quo officiis numquam suscipit est culpa animi reiciendis incidunt!
                Nulla et sed quod voluptas rerum praesentium, porro vitae iure officiis assumenda
                eveniet modi autem aut exercitationem fugit quo. Fugiat, vero consequatur obcaecati
                temporibus aut inventore itaque provident repellat maxime quod. Voluptatum commodi
                natus recusandae quisquam, cupiditate fugiat aperiam totam iusto libero corrupti
                facere placeat quas ab. Aliquam alias, repudiandae voluptatem architecto ut
                voluptatibus fuga consequatur sint delectus accusamus iure rem nihil asperiores
                eveniet molestias blanditiis nemo. Obcaecati, provident voluptatem consequatur
                iusto, vero quis eum facilis eos atque at laboriosam ipsa soluta odit dolore
                voluptatibus quasi ratione maiores autem tempore molestiae inventore corrupti? Ipsa
                molestiae voluptatum accusantium reiciendis voluptate reprehenderit adipisci
                exercitationem dolor, quidem id et quis quasi eum quisquam cumque harum quae
                voluptates a labore! Voluptate nobis unde obcaecati voluptatem sunt corrupti
                asperiores consequuntur voluptatum, a, accusamus animi. Ipsam ipsum provident
                molestias aliquam deleniti adipisci corrupti delectus, dicta ullam numquam porro
                nesciunt repellat soluta voluptatibus? Voluptatum quidem delectus accusamus rem!
                Optio soluta quasi odit ipsum obcaecati laboriosam hic omnis vel quis unde at cumque
                cum beatae repudiandae tenetur deleniti, iure, est veniam. Vero cum dicta eveniet at
                molestias vitae iste porro dolores perferendis debitis provident quisquam dolorem
                totam, voluptatem id impedit autem, reprehenderit, itaque labore ducimus dolore sit
                odio? Voluptatum magni vel ratione. Maxime tenetur dolor perferendis quo illum
                repellendus quisquam expedita sed fugiat, similique, minus magnam facere
                perspiciatis exercitationem! Voluptates, totam rem aperiam necessitatibus aliquid in
                consequuntur veritatis at, perferendis esse nisi doloribus quaerat obcaecati
                inventore nobis deserunt! Libero dolore fugiat temporibus! Molestias voluptate eum,
                quod commodi dolore itaque iusto inventore, modi distinctio deserunt nulla maxime
                quaerat iste dolorum quos laborum ea, deleniti provident. Ipsam facere, quas
                molestias eius aut dicta quis quia. Placeat, amet. Fugit magni, dolores ipsam
                architecto facere rem, beatae iure ea repellat similique porro atque eius odit illo
                eveniet sunt. Nihil dicta provident, magni non ratione reiciendis placeat dolore
                quas harum dolorum ex minus tempore incidunt culpa commodi odio eum ut natus sequi
                ipsam recusandae tenetur. Non dolorum, id excepturi necessitatibus eveniet itaque,
                inventore quibusdam obcaecati facilis repellendus, quas a sit error quasi veniam
                quos eum. Repellat quam corporis error ea sed totam fugit nostrum temporibus quo,
                nemo ullam necessitatibus aut ab assumenda atque minima debitis, voluptas saepe
                corrupti consequuntur sequi facere. Blanditiis beatae porro in enim omnis iure
                soluta magni inventore molestiae, dolores error! Sint error fugiat ipsa, doloremque
                nostrum obcaecati enim temporibus consequuntur blanditiis praesentium porro culpa
                voluptate delectus commodi. Illo iusto, dignissimos, fugiat labore tempore adipisci
                illum vitae quod libero impedit id nihil dolores tenetur rem, possimus doloribus
                pariatur quos error! Dolorem facere aliquid in officia id iure quos modi aspernatur
                repellat! Officia ipsum maxime itaque vitae odit, quae ut temporibus unde ab
                deserunt quisquam illum, tempore quos fuga! Error voluptas ipsam non, qui cupiditate
                dolor tempore, asperiores nobis recusandae laudantium provident velit rerum sit
                atque soluta repellat dolore enim eveniet quibusdam tenetur. Magnam amet praesentium
                distinctio natus, doloremque culpa alias modi perferendis. Nisi possimus, quaerat
                laborum quasi modi vitae cumque, suscipit voluptates at quas iure nulla similique
                unde aut quam. Deserunt earum laudantium labore, accusantium magnam quibusdam minus!
                Quidem earum obcaecati veritatis magni est voluptatem temporibus, et sapiente animi
                voluptates ab quam dolorum commodi minus ex dolores sequi ipsam quia impedit ea?
                Est, ipsum? Vitae ab doloremque, voluptatibus quod fuga ut quis deserunt optio
                corporis id soluta veniam? Repellendus officia veritatis ipsa voluptatibus delectus
                veniam accusantium odio excepturi iure quo, voluptatem, cumque accusamus unde, rem
                esse consequatur. Architecto laudantium dolorum fuga nulla expedita? Delectus
                impedit, labore quis neque pariatur, nemo, in itaque libero laborum at harum ipsam
                tempora. Sapiente quia consequuntur delectus itaque, voluptate consequatur quas
                harum rerum enim fugiat eveniet vel nemo dolorem nam expedita totam adipisci
                temporibus deleniti tempora modi maxime! Ipsum incidunt recusandae eligendi ex
                tempore reiciendis iure porro tempora praesentium, mollitia, enim in facilis dolores
                eum doloribus illo, natus eos totam assumenda expedita? Molestiae, soluta earum?
                Facere, consequuntur, debitis nobis repudiandae adipisci eius laboriosam similique
                soluta ipsam beatae, aperiam alias illo. Necessitatibus officiis est atque voluptas
                nisi. Laboriosam quos suscipit ipsa in sequi praesentium culpa ipsum distinctio
                voluptatibus, aliquid veritatis dicta corporis soluta? Illo iusto deleniti, eius
                debitis omnis quaerat asperiores voluptas adipisci ullam rerum eaque error qui
                maiores illum minima quae facilis delectus maxime hic, nihil magnam mollitia. Itaque
                magnam eaque fugit! Officia nam corrupti neque similique, dicta sit, eos repellat
                voluptas, vitae laborum quibusdam! Atque unde temporibus veritatis, accusamus ea
                pariatur error ad iusto quasi. Ratione, doloribus ullam a temporibus, quam
                laboriosam rerum consequuntur necessitatibus quo possimus sed ipsam aliquam iste
                delectus quia pariatur. Itaque laborum id in culpa reiciendis tempore, unde soluta
                dolores ut dolore natus exercitationem similique voluptatum impedit doloremque,
                sunt, quasi labore dicta neque ducimus earum nam.
            </Typography>
            <FormControl>
                <FormControlLabel
                    onChange={handleClickCheckbox}
                    required
                    control={<Checkbox value={checked} />}
                    label="I accept ..."
                />
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmitForm}
                    disabled={!checked}
                >
                    Continue
                </Button>
            </FormControl>
        </Card>
    );
}

export default TermsDialog;
