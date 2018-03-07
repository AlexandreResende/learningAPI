
module.exports.anticipationDoSomething = (req, res) => {

  const {
    tier,
    discount_rate,
  } = req.body;
  let resposta = false;

  if (tier == 1 && discount_rate < 3.79) resposta = false;
  else if (tier == 2 && discount_rate < 3.59) resposta = false;
  else if (tier == 3 && discount_rate < 3.39) resposta = false;
  else if (tier == 4 && discount_rate < 3.19) resposta = false;
  else resposta = true;

  res.status(200).send({
    status: resposta,
  });
};