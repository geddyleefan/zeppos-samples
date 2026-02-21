AppSideService(
  BaseSideService({
    async onRequest(req, res) {
      const { type, params } = req;
      if (type === "UPLOAD") {
        const result = await fetch({
          url: 'https://zepp-aubrey.azurewebsites.net/sleep',
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params)
        });
        res(null, result.body);
      }
    }
  })
);

