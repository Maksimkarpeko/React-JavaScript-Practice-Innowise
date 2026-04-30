export const getUserText = (data) => {
  const fullName = `${data.firstName} ${data.lastName}`;
  const pronoun = data.gender === 'female' ? 'she' : 'he';
  const possessive = data.gender === 'female' ? 'her' : 'his';
  return {
    summaryTitle: 'Professional Summary',
    hobbyTitle: 'Hobby & Interests',

    summaryText: `${fullName} is an experienced ${data.company.title} working in the ${data.company.department}. With a focus on professional growth and expertise in the engineering sector, ${fullName} contributes to the strategic goals of the organization`,

    hobbyText: ` Outside of work, ${data.firstName} is passionate about digital photography and mountain biking Whether exploring urban landscapes or forest trails, ${pronoun} enjoys capturing moments that inspire creativity in ${possessive} professional life.`,
  };
};
