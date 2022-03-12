let scoreChange = "";
      const oldScore =
          data[key].results[currentEndpoint][runValueArrSort[0]].score;
      const newScore =
          data[key].results[currentEndpoint][runValueArrSort[1]].score;
      if (newScore > oldScore) scoreChange = "success.main";
      else if (newScore === oldScore) scoreChange = "text.primary";
      else if (newScore < oldScore) scoreChange = "error.main";